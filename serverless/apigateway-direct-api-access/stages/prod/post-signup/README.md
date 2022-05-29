# POST SignIn
Signs the User into the Cognito User Pool providing Authentication protection to the API.

## Role
Utilises an AWS Service Role Trust Policy and a Customer Managed Policy.

`signin-role.tf` is a Terraform file stead a JSON due to wanting to keep the policies in JSON format and Terraform's `file()` function behaviour when called from `.tf` vs `.tf.json` files.

## Role Managed Policy
Allows `cognito-idp:InitiateAuth` on `Resource:*`.

### Resources
The `*` is required since `cognito-idp` lacks Resource Level Permissions.
Search for `Amazon Cognito` in [AWS Services That Work with IAM][1].

### Conditions
[Amazon Cognito User Pools][2] lack support for `Conditions`.


## Role Trust Policy
The AWS Role assumable only by the AWS API Gateway to Post InitiateAuth Requests to Cognito.

### Principal
AWS Service `apigateway.amazonaws.com`.

### Conditions
Allows for Conditions:
``` 
      "Condition": {
        "StringEquals": {
          "aws:TagKeys": "",
          "aws:PrincipalTag/${TagKey}": "",
          "aws:RequestTag/${TagKey}": "",
          "sts:TransitiveTagKeys": "",
          "sts:ExternalId": "",
          "sts:RoleSessionName": ""
        }
      }
```

[1]: https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-services-that-work-with-iam.html "AWS Services That Work with IAM : Security, Identity, and Compliance Services"
[2]: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncognitouserpools.html "Actions, Resources, and Condition Keys for Amazon Cognito User Pools"
