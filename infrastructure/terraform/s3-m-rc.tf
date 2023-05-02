module "s3_m-rc" {
  source  = "terraform-aws-modules/s3-bucket/aws"
  version = "3.10"

  bucket = var.domain_name
  tags = {
    project = var.project_name_tag
  }
}

# S3 Policy to restrict access to Cloudfront distribution
data "aws_iam_policy_document" "s3_policy" {
  # Origin Access Controls
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${module.s3_m-rc.s3_bucket_arn}/*"]

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
  bucket = module.s3_m-rc.s3_bucket_id
  policy = data.aws_iam_policy_document.s3_policy.json
}
