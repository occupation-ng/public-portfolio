# Role
A module for Terraform Role

### Variables

#### Require manual modification
Manual modification is required for the policy JSON files.

  - aws-policy-json/role-managed-policy.json
  - aws-policy-json/role-trust-policy.json

#### Passed by Module
Some Terraform variables are passed to the module:

  - role_name : AWS Resource name for role
  - policy_name : AWS Resource name for policy
  - policy_description : Description of policies permissions

### Usage
```
    "module": [
      {
        "role": [
          {
            "source": "./role",
            "role_name": "",
            "policy_name": "",
            "policy_description": ""
          }
        ]
      }
    ]
```
