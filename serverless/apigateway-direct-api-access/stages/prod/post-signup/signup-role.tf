resource "aws_iam_role" "apig-signup" {
      name = "apig-signup"
      assume_role_policy = file("${path.module}/aws-policy-json/post-signup-role-trust-policy.json")
}

resource "aws_iam_policy" "apig-signup" {
      name = "post-signup"
      description = "User signup Auth; Lacks Resource Level Permissions, * Required"
      policy = file("${path.module}/aws-policy-json/post-signup-role-managed-policy.json")
}

resource "aws_iam_role_policy_attachment" "attach-post-signup" {
  role       = aws_iam_role.apig-signup.name
  policy_arn = aws_iam_policy.apig-signup.arn
}
