# API Gateway Direct API Access
APIGateway does allow direct API access between various AWS services.

The services are defined as `terraform` infrastructure-as-code, utilising HCL and JSON configurations.

## Terraform
Terraform files defining an AWS API Gateway.

Requires manually inputting the Account Id and Cognito UserPool Id into `apig.tf.json`.

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

## Tree
Directory tree description

```
.
├── apig.tf.json : Defines an API
├── README.md : Information about the API Gateway Deployment
└── stages
    ├── stages.tf.json : Defines an API Stage and Deployment
    ├── prod
    │   ├── authorizer.tf.json : Defines an Authorizer and the Method-Resource Modules for this Stage
    │   ├── post-signin
    │   │   ├── signin-role.tf : Role definition using the JSON policies in 'aws-policy-json'
    │   │   ├── signin.tf.json : Defines a Method-Resource for POST-SignIn
    │   │   ├── aws-policy-json : Policies documents in JSON format
    │   │   │   ├── post-signin-role-managed-policy.json
    │   │   │   └── post-signin-role-trust-policy.json
    │   │   └── README.md : Information about the API's POST Method for the SignIn Resource
    │   └── README.md : Information about the API Authorizer and 'Method-Resource's
    └── README.md : Information about the API Stages
```
