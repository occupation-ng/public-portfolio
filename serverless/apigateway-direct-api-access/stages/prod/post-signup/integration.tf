resource "aws_api_gateway_integration" "signup-integration" {
  rest_api_id          = var.api.id
  resource_id          = aws_api_gateway_resource.signup.id
  http_method          = aws_api_gateway_method.post-signup.http_method
  type                 = "AWS" 
  uri                  = "arn:aws:apigateway:us-east-2:cognito-idp:action/SignUp"
  credentials          = aws_iam_role.apig-signup.arn 
  integration_http_method = "POST"
  timeout_milliseconds = 29000
  passthrough_behavior = "WHEN_NO_TEMPLATES"
  request_templates = {
    "application/x-www-form-urlencoded" = <<EOF
                {
                    "ClientId": "XXXXXXXXXXXXXXXXXXXXXXXXXX",
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
                              "Username": "$val"#if($foreach.hasNext),#end
                            #end
                            #if( $key == "password" )
                              "Password": "$val"#if($foreach.hasNext),#end
                            #end
                            #if( $key == "email" )
                              "UserAttributes": [
                                {
                                   "Name": "$key",
                                   "Value": "$val"}]#if($foreach.hasNext),#end
                            #end
                        #end
                    #end
                }
EOF
    "application/json" = <<EOF
      { 
        "ClientId": "XXXXXXXXXXXXXXXXXXXXXXXXXX",
        "Username":  "$input.path('$.username')",
        "Password":  "$input.path('$.password')",
        "UserAttributes": [
          {
             "Name": "email",
             "Value": "$input.path('$.email')"}]
      }
EOF
  }
}

resource "aws_api_gateway_method_response" "response_200" {
  rest_api_id          = var.api.id
  resource_id          = aws_api_gateway_resource.signup.id
  http_method          = aws_api_gateway_method.post-signup.http_method
  status_code = "200"
}

resource "aws_api_gateway_integration_response" "signup-integration-response" {
  rest_api_id          = var.api.id
  resource_id          = aws_api_gateway_resource.signup.id
  http_method          = aws_api_gateway_method.post-signup.http_method
  status_code = aws_api_gateway_method_response.response_200.status_code
  response_templates = {
    "application/json" = ""
  }
}
