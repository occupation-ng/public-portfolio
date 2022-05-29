/*
For GCP Go API calls for the `gcloud` commands you most often use.

`vaultesque` utilises the GCP Go API's ability to pass the JSON as []uint8 for Authentication using `option,WithCredentialsJSON(secret)`.
This is more secure than the above process because it bypasses the call to `exec.Command("sh","-c",cmd)` as well as avoiding having to write the JSON temporarily to disk.
*/

package main

import (
	admin "cloud.google.com/go/iam/admin/apiv1"
	"context"
	"encoding/json"
	"fmt"
	option "google.golang.org/api/option"
	adminpb "google.golang.org/genproto/googleapis/iam/admin/v1"
	"strconv"
	"strings"
)

func substrInStringArray(arr []string, substr string) bool {
	for _, str := range arr {
		if strings.Contains(str, substr) {
			return true
		}
	}
	return false
}

func getPageSize(arr []string) (pagesize int32) {
	substr := "--limit"
	pageSizeStr := "0" // 0 as limit returns 'all'
	for ind, str := range arr {
		if strings.Contains(str, substr) {
			if strings.Contains(str, "=") {
				spl := strings.Split(str, "=")
				pageSizeStr = spl[1]
				break
			} else {
				pageSizeStr = arr[ind+1]
				break
			}
		}
	}
	pageSize64b, err := strconv.ParseInt(pageSizeStr, 10, 32)
	if err != nil {
		fmt.Println("ERR:", err)
		return int32(0) // 0 as limit returns 'all'
	}
	return int32(pageSize64b)
}

func cloudgoListRoles(args []string) (resp *adminpb.ListRolesResponse) {
	profile := args[1]
	ctx := context.Background()
	secret, err := json.Marshal(convertJSONtoMapStringString(getCreds(profile)))
	iamClient, err := admin.NewIamClient(ctx, option.WithCredentialsJSON(secret))
	if err != nil {
	}
	req := &adminpb.ListRolesRequest{}
	// https://godoc.org/google.golang.org/genproto/googleapis/iam/admin/v1#ListRolesRequest
	if substrInStringArray(args, "--limit") {
		req.PageSize = getPageSize(args)
	}
	resp, err = iamClient.ListRoles(ctx, req)
	if err != nil {
		fmt.Println("ERR:", err)
	}
	return resp
}

func gcloudCommonUsageCoverage(args []string) (ok bool) {
	/* return True  : use the Exec CommonUsage ServiceOp Function
	   return False : use the Exec Fallback Function
	   [iam, roles, list] :: args[4:7]
	      ex. args == [exec(0) profile(1) "--"(2) gcloud(3) iam(4) roles(5) list(6) ..]
	*/
	serviceResourceAction := strings.Join(args[4:7], ".") // slice [inclusive:exclusive]
	gcloudCoverage := map[string]struct{}{}               //golang idiomatic set
	// Add new keys for specific gcloud commands
	gcloudCoverage["iam.roles.list"] = struct{}{} //cloudgoListRoles()
	_, ok = gcloudCoverage[serviceResourceAction] //check if resourceAction is in coverage list
	return ok
}

func gcloudCommonUsage(args []string) (out string) {
	serviceResourceAction := strings.Join(args[4:7], ".") // slice [inclusive:exclusive]
	switch serviceResourceAction {
	case "iam.roles.list":
		return cloudgoListRoles(args).String()
	default:
		return "err: Unable to find a case for common usage:" + serviceResourceAction
	}
}
