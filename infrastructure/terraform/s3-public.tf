locals {
  s3_website_name_public = "m-rc-test-s3-bucket-name"
}

data "aws_iam_policy_document" "bucket_policy" {
  statement {
    principals {
      type        = "*"
      identifiers = ["*"]
    }
    sid       = "PublicReadGetObject"
    effect    = "Allow"
    actions   = ["s3:GetObject"]
    resources = ["arn:aws:s3:::${local.s3_website_name_public}/*"]
  }
}

module "s3-bucket" {
  source  = "terraform-aws-modules/s3-bucket/aws"
  version = "3.8.2"

  bucket = local.s3_website_name_public

  tags = {
    project = var.project_name_tag
  }

  website = {
    index_document = "index.html"
    error_document = "index.html"
  }

  # TODO remove once Cloudfront is available
  # See 'Canned ACL' docs: https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#canned-acl
  acl = "public-read"

  # bucket policy
  attach_policy = true
  policy        = data.aws_iam_policy_document.bucket_policy.json


  # S3 bucket-level Public Access Block configuration
  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}
