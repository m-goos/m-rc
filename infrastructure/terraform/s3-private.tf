locals {
  s3_website_name_cloudfront = "m-rc-test-private"
}

module "s3_m-rc_test-private" {
  source  = "terraform-aws-modules/s3-bucket/aws"
  version = "3.8.2"

  bucket = local.s3_website_name_cloudfront
  # acl    = "private" @see https://github.com/terraform-aws-modules/terraform-aws-s3-bucket/issues/223

  tags = {
    project = var.project_name_tag
  }
}

# S3 Policy to restrict access to Cloudfront distribution
data "aws_iam_policy_document" "s3_policy" {
  # Origin Access Controls
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${module.s3_m-rc_test-private.s3_bucket_arn}/*"]

    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }

    condition {
      test     = "StringEquals"
      variable = "aws:SourceArn"
      values   = [module.cloudfront.cloudfront_distribution_arn]
    }
  }
}

resource "aws_s3_bucket_policy" "bucket_policy" {
  bucket = module.s3_m-rc_test-private.s3_bucket_id
  policy = data.aws_iam_policy_document.s3_policy.json
}
