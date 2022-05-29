# Vaultesque
Utility to securely store and use `gcloud` credentials similar to 99design's `aws-vault` using its `keychain` go package.
 
https://www.jhanley.com/google-cloud-where-are-my-credentials-stored/

# Wherefore 
To use `gcloud` with a Service Account you need an on disk JSON file whose path you can pass to the `gcloud` utility.
This utility will store the Service Account JSON in the Operating System's keychain and when calling `gcloud` it will:
- grab the JSON file from the Keychain
- write the JSON file to disk in a temporary file
- authenticate gcloud using exec.Command("sh","-c",cmd)
- delete the temporary file
- call the gcloud command using exec.Command("sh","-c",cmd)
- revoke the crendtials from gcloud using exec.Command("sh","-c",cmd)


Also, the `common-usage.go` source is where you can write GCP Go API calls for the `gcloud` commands you most often use.
`vaultesque` utilises the GCP Go API's ability to pass the JSON as []uint8 for Authentication using `option,WithCredentialsJSON(secret)`.
This is more secure than the above process because it bypasses the call to `exec.Command("sh","-c",cmd)` as well as avoiding having to write the JSON temporarily to disk.

The `gcloud` and GCP Go API Authentications are separate so one is unable to Authenticate with GCP Go APIs then call `gcloud` with `exec.Command("sh","-c",cmd)`.
The first option provides a fallback for any new or yet to be added to common usage commands.

## Usage
To be used with [gcloud][https://cloud.google.com/sdk/gcloud/reference].

Follow the `gcloud` installation instructions: https://cloud.google.com/sdk/docs/install
```
  $ go build -v -x vaultesque.go commonusage.go
  $ ./vaultesque
```
NOTE: `-x` to print commands, `-v` flag for verbose output.


Executing `vaultesque` without arguments will return the `usage` prompt
```
$ go build -v -x vaultesque.go commonusage.go
$ ./vaultesque
   add : store credentials for a new vaultesque profile
       <PROFILE> : specifies a profile to identify the new credentials
     vaultesque add <PROFILE>
   list : shows a list of all stored credential profiles
     vaultesque list
	 rotate : replace stored credentials with new
		   <PROFILE> : specifies which profile's credentials to rotate
		 vaultesque rotate <PROFILE>
   exec : execute a comand after collectiong gcp credentials
       <PROFILE> : specifies which GCP credential to use
                   use `vaultesque list` for a list of stored profiles
       <COMMAND> : specifies which command to execute
     vaultesque exec <PROFILE> -- <COMMAND>
		    : execute a common comand using GCloud Go API after collectiong GCP credentials, calls hardcoded into vaultesque")
		   <PROFILE> : specifies which GCP credential to use
		               use `vaultesque list` for a list of stored profiles
  	   <COMMAND> : specifies which command to execute, if lacks a built-in function for the API call fallback to using system call to gcloud CLI
		 vaultesque exec <PROFILE> -- gcloud <COMMAND>
		    ex. $ vaultesque exec <PROFILE> -- gcloud iam list roles --limit 4
   remove : remove stored credentials
       <PROFILE> : specifies which profile's credentials to remove
     vaultesque remove <PROFILE>
```

# Add
Adds a new profile with secret to the OS's `Keyring`.

## Procedure
Create a `service account` to store in the `Keyring`:

### Service Account
Go to [GCP ServiceAccount Console][4]

- Create the Service Account
- Click the vertical `...` under Actions.
- Choose `Create Key->JSON`

Run `vaultesque add <PROFILE>` with a profile name of your choice to identify the Service Account.

Copy-Paste the `Service Account JSON` string when prompted by `vaultesque`.

# Remove
Removes the profile from `vaultesque` and the associated `Stored Credentials` in the `Keyring`.

# List
Will list all of the Credentials stored in the Keyring by `vaultesque` by profile.

# Exec
Will cycle the auth/revoke pattern for `gcloud` sourcing the key-file from the 'Keyring'.

`vaultesque exec <PROFILE> -- <COMMAND>`

## Procedure Performed by Vaultesque

### Authenticate
Authenticate `gcloud` with the `Credentials` stored in the `Keyring` by `vaultesque`.

[gcloud auth][1]
```
gcloud auth activate-service-account --key-file=/PATH/TO/SERVICE_ACCOUNT.json
```

### Execute
Execute the passed command while Authenticated using either built-in API calls or falling back on gcloud CLI system calls.

### Revoke
Revoke the Authentication credentials after completing the command execution.

```
gcloud auth revoke [ACCOUNT]
```

# Common Usage Coverage
For GCP Go API calls for the `gcloud` commands you most often use.

`vaultesque` utilises the GCP Go API's ability to pass the JSON as []uint8 for Authentication using `option,WithCredentialsJSON(secret)`.
This is more secure than the above process because it bypasses the call to `exec.Command("sh","-c",cmd)` as well as avoiding having to write the JSON temporarily to disk.

Common Usage Coverage of `gcloud` commands to GCP Go API:
```
    gcloud Arguments           API Request             

     iam roles list         cloudgoListRoles()
                              [ ] Parent string 
 --limit INT|--limit=INT      [+] PageSize int32      
                              [ ] PageToken string
                              [ ] View RoleView 
                              [ ] ShowDeleted bool
    ex.
        $ vaultesque exec <PROFILE> -- gcloud iam roles list --limit 4
```

## Testing:
```
go run * exec vaultesque-sa-test -- gcloud iam roles list --limit 2
```

# API Quotas
The default Service Account API call quoto is 240 per minute.

```
Console -> Project -> APIs & Services -> Quotas -> Default Requests
```

# NOTES
Last tested on Fedora 34 VM in QubesOS4.1

The `vault` in `vaultesque` refers to [99designs/aws-vault][2] stead Hashicorp's Vault as in [NYTimes/gcp-vault][3].

Self described as:
> gcp-vault provides a function for securely retrieving secrets from HashiCorp Vault while running on the Google Cloud Platform or in your local development environment.

# License
Copyright 2022, this repository author.

See LICENSE file.

[1]: https://cloud.google.com/sdk/gcloud/reference/auth/login
[2]: https://github.com/99designs/aws-vault
[3]: https://github.com/NYTimes/gcp-vault
[4]: https://console.cloud.google.com/iam-admin/serviceaccounts
