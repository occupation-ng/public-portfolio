package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"github.com/99designs/keyring"
	"io/ioutil"
	"log"
	"os"
	"os/exec"
	"strings"
)

func getCreds(profile string) (out []byte) {
	ring, _ := keyring.Open(keyring.Config{
		ServiceName: "vaultesque"})
	profiles := getGCPVaultList()
	profilePresent := false
	for _, ea := range profiles {
		if profile == ea {
			profilePresent = true
		}
	}
	if !profilePresent {
		fmt.Println("err: Unknown profile: ", profile)
		fmt.Println("   : use `vaultesque list` for a list of stored profiles")
		os.Exit(0)
	}
	i, _ := ring.Get("vaultesque/" + profile)
	if len(i.Data) == 0 {
		fmt.Println("err: Unable to get credentials from keyring for profile: ", profile)
		fmt.Println("   :   try authenticating your keyring")
		os.Exit(0)
	}
	return i.Data
}

func gcpVaultRemove(args []string) {
	if len(args) > 1 {
		profile := args[1]
		ring, _ := keyring.Open(keyring.Config{
			ServiceName: "vaultesque"})
		ring.Remove("vaultesque/" + profile)
		fmt.Println("  Removed:", profile)
		gcpVaultList()
	} else {
		fmt.Println("err : Missing Arguments : Please provide a profile to remove")
		flag.Usage()
		os.Exit(0)
	}
}

func gcpVaultList() {
	profiles := getGCPVaultList()
	fmt.Println("Stored Profiles:")
	for _, ea := range profiles {
		fmt.Println("  ", ea)
	}
}

func getGCPVaultList() []string {
	ring, _ := keyring.Open(keyring.Config{
		ServiceName: "vaultesque",
	})
	onlyGCPKeys := []string{}
	keys, _ := ring.Keys()
	for _, ea := range keys {
		if strings.HasPrefix(ea, "vaultesque/") {
			onlyGCPKeys = append(onlyGCPKeys, strings.Split(ea, "/")[1])
		}
	}
	return onlyGCPKeys
}

func gcloudAuthCreds(creds map[string]string, account string, project string) {
	// Create temporary JSON service account keyfile
	// TODO Debated making this a hidden file: .DELETE_; but ultimately decided against it in favour of visibility
	tmpJSONPath := "DELETE_THIS_FILE_tmp_vaultesque_keyfile.json"
	file, _ := json.MarshalIndent(creds, "", " ")
	_ = ioutil.WriteFile(tmpJSONPath, file, 0644)
	// Auth using temporary JSON service account keyfile
	cmdArr := []string{"gcloud", "auth", "activate-service-account", account, "--key-file=" + tmpJSONPath, "--project", project}
	cmd := strings.Join(cmdArr, " ")
	fmt.Println("CMD:", cmd)
	_, err := exec.Command("sh", "-c", cmd).Output()
	if err != nil {
		log.Print(err)
		fmt.Println("err: Failed to authenticate account credentials : " + cmd)
		_, err := exec.Command("sh", "-c", "gcloud auth list").Output()
		if err != nil {
			fmt.Println("err: gcloud cli calls failing")
		}
		os.Exit(0)
	}
	// Delete temporary JSON service account keyfile
	cmdArr = []string{"rm", tmpJSONPath}
	cmd = strings.Join(cmdArr, " ")
	_, _ = exec.Command("sh", "-c", cmd).Output()
}

func gcloudRevokeCreds(account string) {
	//gcloud auth revoke [ACCOUNT]
	cmdArr := []string{"gcloud", "auth", "revoke", account, "--quiet"}
	cmd := strings.Join(cmdArr, " ")
	_, err := exec.Command("sh", "-c", cmd).Output()
	if err != nil {
		log.Print(err)
		fmt.Println("err: Failed to revoke credentials for account: " + account)
		os.Exit(0)
	}
	/* TODO  if verbose {
	   fmt.Println(string(revokeOut))
	   authOut, _ := exec.Command("sh","-c","gcloud auth list").Output()
	   fmt.Println(string(authOut)) } */
}

func convertJSONtoMapStringString(data []byte) (mapss map[string]string) {
	mapss = map[string]string{}
	err := json.Unmarshal(data, &mapss)
	if err != nil {
		fmt.Println("err: Error reading json to map[string]string :\n", err)
		os.Exit(0)
	}
	return mapss
}

func gcpVaultExec(args []string) (out string) {
	if args[2] == "--" {
		if args[3] == "gcloud" && gcloudCommonUsageCoverage(args) {
			return gcloudCommonUsage(args)
		}
		return gcpVaultExecFallback(args)
	}
	return "err: vaultesque input causing failure: ensure '--' follows <PROFILE> : " + strings.Join(args, " ")
}

func gcpVaultExecFallback(args []string) (out string) {
	// get Credentials from Keyring
	profile := args[1]
	creds := convertJSONtoMapStringString(getCreds(profile))
	account := creds["clientEmail"]
	project := creds["projectId"]
	// Auth with Credentials
	gcloudAuthCreds(creds, account, project)
	cmd := strings.Join(args[3:], " ")
	cmdOut, err := exec.Command("sh", "-c", cmd).Output()
	if err != nil {
		// Revoke Credentials
		gcloudRevokeCreds(account)
		log.Print(err)
		fmt.Println(err)
		return "err: Command causing failure : " + cmd
	}
	// Revoke Credentials
	gcloudRevokeCreds(account)
	return string(cmdOut[:])
}

func getJSONFromFile(filePath string) (sa map[string]string) {
	data, err := ioutil.ReadFile(filePath)
	if err != nil {
		fmt.Println("err: File path causing failures: ", filePath, "\n", err)
		os.Exit(0)
	}
	return convertJSONtoMapStringString(data)
}

func deleteServiceAccountRequest(filePath string) {
	var confirm string
	fmt.Println("Would you like vaultesque to now delete the Service Account Keyfile at?: ", filePath, "\n  y|n: (Suggested: y)")
	fmt.Scanf("%s", &confirm)
	if confirm == "y" {
		cmdArr := []string{"rm", filePath}
		cmd := strings.Join(cmdArr, " ")
		_, _ = exec.Command("sh", "-c", cmd).Output()
		fmt.Println("Deleted the Service Account Keyfile at: ", filePath)
	} else {
		fmt.Println("The Service Account Keyfile will remain at:", filePath)
	}
}

func gcpVaultAdd(args []string) {
	if len(args) > 1 {
		profile := args[1]
		var filePath string
		// Get Service Account from JSON File
		fmt.Printf("Enter the Service Account JSON File Path: ")
		fmt.Scanf("%s", &filePath)
		serviceAccountJSON := getJSONFromFile(filePath)
		// Request to delete the Service Account JSON File
		deleteServiceAccountRequest(filePath)
		//Open Keyring
		ring, _ := keyring.Open(keyring.Config{
			ServiceName: "vaultesque"})
		// Marshal: map[string]string->[]uint8
		secret, err := json.Marshal(serviceAccountJSON)
		if err != nil {
			panic(err)
		}
		// Set Service Account to Keyring
		var key = "vaultesque/" + profile
		_ = ring.Set(keyring.Item{
			Key:  key,
			Data: []byte(secret)})
	} else {
		fmt.Println("err : Missing Arguments : Please provide a profile to add")
		flag.Usage()
		os.Exit(0)
	}
}

func handleFlags() {
	flag.Usage = func() {
		fmt.Printf("Usage of %s:\n", os.Args[0])
		fmt.Println("   help : show this prompt")
		fmt.Println("       alternatives: -h, --help")
		fmt.Printf("     vaultesque help\n\n")
		fmt.Println("   add : store credentials for a new vaultesque profile")
		fmt.Println("       <PROFILE> : specifies a profile to identify the new credentials")
		fmt.Printf("     vaultesque add <PROFILE>\n\n")
		fmt.Println("   list : shows a list of all stored credential profiles")
		fmt.Printf("     vaultesque list\n\n")
		fmt.Println("   rotate : replace stored credentials with new")
		fmt.Println("       <PROFILE> : specifies which profile's credentials to rotate")
		fmt.Printf("     vaultesque rotate <PROFILE>\n\n")
		fmt.Println("   exec : execute a comand after collectiong gcp credentials")
		fmt.Println("       <PROFILE> : specifies which GCP credential to use")
		fmt.Println("                   use `vaultesque list` for a list of stored profiles")
		fmt.Println("       <COMMAND> : specifies which command to execute")
		fmt.Printf("     vaultesque exec <PROFILE> -- <COMMAND>\n\n")
		fmt.Println("        : execute a common comand using GCloud Go API after collectiong GCP credentials, calls hardcoded into vaultesque")
		fmt.Println("       <PROFILE> : specifies which GCP credential to use")
		fmt.Println("                   use `vaultesque list` for a list of stored profiles")
		fmt.Println("       <COMMAND> : specifies which command to execute, if lacks a built-in function for the API call fallback to using system call to gcloud CLI")
		fmt.Printf("     vaultesque exec <PROFILE> -- gcloud <COMMAND>")
		fmt.Printf("       ex. $ vaultesque exec <PROFILE> -- gcloud iam list roles --limit 4\n\n")
		fmt.Println("   remove : remove stored credentials")
		fmt.Println("       <PROFILE> : specifies which profile's credentials to remove")
		fmt.Printf("     vaultesque remove <PROFILE>\n\n")
		//TODO fmt.Println("   login : will log the profile into the GCP Web Console")
		//TODO fmt.Println("     vaultesque login <PROFILE>")
		flag.PrintDefaults()
	}
	flag.Parse()
	if flag.NArg() == 0 {
		fmt.Println("err : Missing Arguments : Showing help")
		flag.Usage()
		os.Exit(0)
	}
}

func main() {
	handleFlags()

	args := flag.Args()

	if args[0] == "help" || args[0] == "--help" || args[0] == "-h" {
		flag.Usage()
	} else {
		switch args[0] {
		case "add":
			// TODO currently overrides if profile present, should check and prompt
			gcpVaultAdd(args)
		case "list":
			getGCPVaultList()
		case "rotate":
			// TODO using Add() due to overriding
			gcpVaultAdd(args)
		case "remove":
			gcpVaultRemove(args)
		case "exec":
			fmt.Println(gcpVaultExec(args))
		//TODO case "login":
		default:
			flag.Usage()
			log.Fatal("Unrecognised arguments")
		}
	}
}
