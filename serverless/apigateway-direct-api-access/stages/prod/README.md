# API Methods
API Methods for AWS API Gateway deployed by Terraform.

## Authorizer
Different stages may require different authorizers.

### Cognito User Pool
Authorizers API calls based on Cognito User Pool InitiateAuth.

## Structure
All of the `aws_api_gateway_method`s have subdirectories and are defined as modules in `authorizer.tf.json`.

Modules are named as `<METHOD>-<RESOURCE>`.

Each method has a directory with:
- A Role
- A Trust Policy for the Role
- A Managed Policy for the Role

## Settings
There are a number of configurable variables for each method, but the pricing will become more complex.

### Throttling
Throttling is more about tightening AWS' defaults.

> By default, API Gateway limits the steady-state request rate to 10,000 requests per second (rps). It limits the burst (that is, the maximum bucket size) to 5,000 requests across all APIs within an AWS account.
> The account-level rate limit can be increased upon request. 
[AWS Docs: Request Throttling][1]

`*/*` in the `method_path` will apply the settings across all methods in the stage.
```
{
      "aws_api_gateway_method_settings": [
        {
          "method_settings": [
            {
              "method_path": "${aws_api_gateway_resource.test.path_part}/${aws_api_gateway_method.test.http_method}",
              "rest_api_id": "${aws_api_gateway_rest_api.test.id}",
              "stage_name": "${aws_api_gateway_stage.test.stage_name}",
              "settings": [
                {
                  "logging_level": "OFF|ERROR|INFO",
                                  (Optional) Specifies the logging level for this method, which effects the log entries pushed to Amazon CloudWatch Logs. The available levels are OFF, ERROR, and INFO.
                  "metrics_enabled": true,
                                  (Optional) Specifies whether Amazon CloudWatch metrics are enabled for this method.
                  "data_trace_enabled": true,
                                  (Optional) Specifies whether data trace logging is enabled for this method, which effects the log entries pushed to Amazon CloudWatch Logs.
                  "throttling_burst_limit": 0,
                                  (Optional) Specifies the throttling burst limit.
                  "throttling_rate_limit": 0,
                                  (Optional) Specifies the throttling rate limit.
                  "caching_enabled": 0,
                                  (Optional) Specifies whether responses should be cached and returned for requests. A cache cluster must be enabled on the stage for responses to be cached.
                  "cache_ttl_in_seconds": 0, 
                                  (Optional) Specifies the time to live (TTL), in seconds, for cached responses. The higher the TTL, the longer the response will be cached.
                  "cache_data_encrypted": 0, 
                                  (Optional) Specifies whether the cached responses are encrypted.
                  "require_authorization_for_cache_control": 0, 
                                  (Optional) Specifies whether authorization is required for a cache invalidation request.
                  "unauthorized_cache_control_header_strategy": 0, 
                                  (Optional) Specifies how to handle unauthorized requests for cache invalidation. The available values are FAIL_WITH_403, SUCCEED_WITH_RESPONSE_HEADER, SUCCEED_WITHOUT_RESPONSE_HEADER.
                }
              ]
            }
          ]
        }
      ]
    }
```


### URI
AWS API Gateway Method Integration `uri`:
```
--uri (string)

    Specifies Uniform Resource Identifier (URI) of the integration endpoint.

        For HTTP or HTTP_PROXY integrations, the URI must be a fully formed, encoded HTTP(S) URL according to the RFC-3986 specification , for either standard integration, where connectionType is not VPC_LINK , or private integration, where connectionType is VPC_LINK . For a private HTTP integration, the URI is not used for routing.
        For AWS or AWS_PROXY integrations, the URI is of the form arn:aws:apigateway:{region}:{subdomain.service|service}:path|action/{service_api} . Here, {Region} is the API Gateway region (e.g., us-east-1 ); {service} is the name of the integrated AWS service (e.g., s3 ); and {subdomain} is a designated subdomain supported by certain AWS service for fast host-name lookup. action can be used for an AWS service action-based API, using an Action={name}{p1}={v1}p2={v2}... query string. The ensuing {service_api} refers to a supported action {name} plus any required input parameters. Alternatively, path can be used for an AWS service path-based API. The ensuing service_api refers to the path to an AWS service resource, including the region of the integrated AWS service, if applicable. For example, for integration with the S3 API of `GetObject <https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectGET.html>`__ , the uri can be either arn:aws:apigateway:us-west-2:s3:action/GetObjectBucket={bucket}Key={key} or arn:aws:apigateway:us-west-2:s3:path/{bucket}/{key}
        https://docs.aws.amazon.com/cli/latest/reference/apigateway/put-integration.html
```

Terraform:
```
uri - (Optional) The input's URI. Required if type is AWS, AWS_PROXY, HTTP or HTTP_PROXY. For HTTP integrations, the URI must be a fully formed, encoded HTTP(S) URL according to the RFC-3986 specification . For AWS integrations, the URI should be of the form arn:aws:apigateway:{region}:{subdomain.service|service}:{path|action}/{service_api}. region, subdomain and service are used to determine the right endpoint. e.g. arn:aws:apigateway:eu-west-1:lambda:path/2015-03-31/functions/arn:aws:lambda:eu-west-1:012345678901:function:my-func/invocations. For private integrations, the URI parameter is not used for routing requests to your endpoint, but is used for setting the Host header and for certificate validation.

https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/api_gateway_integration#uri
```
[1]: https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html#apig-request-throttling-stage-and-method-level-limits
