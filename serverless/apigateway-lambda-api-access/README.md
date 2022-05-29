# Terraform
Terraform files defining an AWS API Gateway.

## Directories
The lambda function and the configuration for the API Gateway are separated.

## clj
Contains the Lambda function's `Clojure` source.

## tf
Contains the API Gateway's and Lambda's `terraform` infra-as-code configurations.

## Deploy
Use `aws-vault` for the credentials for the Terraform AWS Provider.

### Apply
To create the defined resources:

```
  $ aws-vault exec aws-tf -- terraform init
  $ aws-vault exec aws-tf -- terraform plan 
  $ aws-vault exec aws-tf -- terraform apply 
```
NOTE: If modifying any modules you will need to rerun `terraform init`.

### Destroy
To remove the created resources:

```
  $ aws-vault exec aws-tf -- terraform apply 
```

# License
Copyright 2022, this serverlesss repository author.

See LICENSE file

