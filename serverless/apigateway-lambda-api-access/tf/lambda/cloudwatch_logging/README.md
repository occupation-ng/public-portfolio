# CloudWatch Logging
Logging in AWS CloudWatch.

### Variables

#### Require manual modification
Manual modification is required for the policy JSON files.

  - aws-policy-json/cloudwatch-logging-managed-policy.json

There are a number of options listed in the Policy JSON.
Most likely the log group listing will be used, but it depends on the module's intended use.

See: [CloudWatch Logging Access Control][1]; for additional considerations.

#### Passed by Module
Some Terraform variables are passed to the module:

  - log_name : STR : Name for the CloudWatch Log; ex. /aws/<SERVICE>/<RESOURCE>
  - log_retention : INT : Determines how long in days to keep logs; BILLING considerations apply; standard: 14

### Usage
```
    "module": [
      {
        "cloudwatch-logging": [
          {
            "source": "./cloudwatch-logging",
            "log_name": "",
            "log_retention": 0,
          }
        ]
      }
    ]
```

[1]: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/iam-access-control-overview-cwl.html
