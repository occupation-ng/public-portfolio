resource "aws_api_gateway_integration" "signin-integration" {
  rest_api_id          = var.api.id
  resource_id          = aws_api_gateway_resource.signin.id
  http_method          = aws_api_gateway_method.post-signin.http_method
  type                 = "AWS" 
  uri                  = "arn:aws:apigateway:us-east-2:cognito-idp:action/InitiateAuth"
  credentials          = aws_iam_role.apig-signin.arn 
  integration_http_method = "POST"
  timeout_milliseconds = 29000
  passthrough_behavior = "WHEN_NO_TEMPLATES"
  request_templates = {
    "application/x-www-form-urlencoded" = <<EOF
                {
                    "ClientId": "XXXXXXXXXXXXXXXXXXXXXXXXXX",
                    "AuthFlow": "USER_PASSWORD_AUTH",
                    "AuthParameters": {       
                        #foreach( $token in $input.path('$').split('&') )
                            #set( $keyVal = $token.split('=') )
                            #set( $keyValSize = $keyVal.size() )
                            #if( $keyValSize >= 1 )
                                #set( $key = $util.urlDecode($keyVal[0]) )
                                #if( $keyValSize >= 2 )
                                    #set( $val = $util.urlDecode($keyVal[1]) )
                                #else
                                    #set( $val = '' )
                                #end
                                #if( $key == "username" )
                                  "USERNAME": "$val"#if($foreach.hasNext),#end
                                #end
                                #if( $key == "password" )
                                  "USERNAME": "$val"#if($foreach.hasNext),#end
                                #end
                            #end
                        #end
                    }
                }
EOF
    "application/json" = <<EOF
                {
                    "AuthFlow": "USER_PASSWORD_AUTH",
                    "AuthParameters": {
                      "USERNAME": "$input.path('$.username')",
                      "PASSWORD": "$input.path('$.password')"
                    },
                    "ClientId": "XXXXXXXXXXXXXXXXXXXXXXXXXX"
                }
EOF
  }
}

resource "aws_api_gateway_method_response" "response_200" {
  rest_api_id          = var.api.id
  resource_id          = aws_api_gateway_resource.signin.id
  http_method          = aws_api_gateway_method.post-signin.http_method
  status_code = "200"
}

resource "aws_api_gateway_integration_response" "signin-integration-response" {
  rest_api_id          = var.api.id
  resource_id          = aws_api_gateway_resource.signin.id
  http_method          = aws_api_gateway_method.post-signin.http_method
  status_code = aws_api_gateway_method_response.response_200.status_code
  response_templates = {
    "application/json" = ""
  }
}
