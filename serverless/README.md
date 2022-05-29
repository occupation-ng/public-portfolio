# Serverless 
Example utilising the serveless service APIGateway to allow an API endpoint to call a lambda function and other AWS services.

## apigateway-direct-api-access  
APIGateway does allow direct API access between various AWS services.


The services are defined as `terraform` infrastructure-as-code, utilising HCL and JSON configurations.

## apigateway-lambda-api-access
APIGateway also allows API access to AWS Lambda which can to work with various AWS services.

The services are defined as `terraform` infrastructure-as-code, utilising HCL and JSON configurations.

The Lambda function is written in Clojure.

# License
Copyright 2022, this serverlesss repository author.

See LICENSE file
