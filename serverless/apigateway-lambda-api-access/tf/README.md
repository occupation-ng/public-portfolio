# API Gateway Lambda Integration

Requires manually inputting Account Id into `tf/lambda/role/aws-policy-json/role-managed-policy.json` and `tf/lambda/lambda.tf.json`.



## Lambda
Lambda functions.
[Terraform: lambda_function][1]
              
```
"filename":"${var.zip_file}", 
          "zip_file": "../clj/apig-post-signin/target/uberjar/apig-post-signin-0.1.0-SNAPSHOT-standalone.jar",
  "s3_bucket": "https://static-test.s3.us-east-2.amazonaws.com/",
```

[1]: https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/lambda_function
