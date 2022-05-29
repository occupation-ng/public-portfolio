resource "aws_iam_role" "apig-signin" {
      name = "apig-signin"
      assume_role_policy = file("${path.module}/aws-policy-json/post-signin-role-trust-policy.json")
}

resource "aws_iam_policy" "apig-signin" {
      name = "post-signin"
      description = "User SignIn Auth; Lacks Resource Level Permissions, * Required"
      policy = file("${path.module}/aws-policy-json/post-signin-role-managed-policy.json")
}

resource "aws_iam_role_policy_attachment" "attach-post-signin" {
  role       = aws_iam_role.apig-signin.name
  policy_arn = aws_iam_policy.apig-signin.arn
}
