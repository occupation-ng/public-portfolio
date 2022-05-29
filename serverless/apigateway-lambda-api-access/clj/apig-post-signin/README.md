# APIGateway POST SignIn Cognito

APIGateway allows API access to AWS Lambda which can to work with various AWS services.

The services are defined as terraform infrastructure-as-code, utilising HCL and JSON configurations.

The Lambda function is written in Clojure and allows for Cognito Sign In via API POST.

## Build
Build the Lambda's jar file using `lein`.

	$ lein uberjar

## Libraries
This repository uses Cognitect's `aws-api` library. 
https://github.com/cognitect-labs/aws-api

# License
Copyright 2022, this serverlesss repository author.

See LICENSE file
