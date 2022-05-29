variable "role_name" {
  type = string
  default = "provided by module"
}
variable "policy_name" {
  type = string
  default = "provided by module"
}
variable "policy_description" {
  type = string
  default = "provided by module"
}

output "arn" {
  value = aws_iam_role.role.arn
}


resource "aws_iam_role" "role" {
      name = var.role_name
      assume_role_policy = file("${path.module}/aws-policy-json/role-trust-policy.json")
}

resource "aws_iam_policy" "policy" {
      name = var.policy_name
      description = var.policy_description
      policy = file("${path.module}/aws-policy-json/role-managed-policy.json")
}

resource "aws_iam_role_policy_attachment" "attachment" {
  role       = aws_iam_role.role.name
  policy_arn = aws_iam_policy.policy.arn
}
