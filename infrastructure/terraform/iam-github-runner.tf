# TODO eventually replace with https://registry.terraform.io/modules/terraform-aws-modules/iam/aws/latest ?

module "s3_user" {
  source  = "cloudposse/iam-s3-user/aws"
  version = "1.1.0"
  tags = {
    project = var.project_name_tag
  }

  # IAM role information
  namespace = "m-rc"
  stage     = "prod"
  name      = "github-runner-s3-deploy"

  s3_actions   = ["s3:PutObject", "s3:GetObject", "s3:ListBucket", "s3:DeleteObject"]
  s3_resources = ["${module.s3_m-rc.s3_bucket_arn}/*", module.s3_m-rc.s3_bucket_arn]

  ssm_base_path = var.ssm_base_path
  ssm_enabled   = var.ssm_enabled
}

data "aws_caller_identity" "current" {}

resource "aws_iam_user_policy" "cloudfront_invalidation" {
  name = "cloudfront-invalidation"
  user = module.s3_user.user_name

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "cloudfront:CreateInvalidation",
          "cloudfront:GetInvalidation"
        ]
        Resource = "arn:aws:cloudfront::${data.aws_caller_identity.current.account_id}:distribution/${module.cloudfront.cloudfront_distribution_id}"
      }
    ]
  })
}
