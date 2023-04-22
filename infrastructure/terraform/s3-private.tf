locals {
  s3_website_name_cloudfront = "m-rc-test-private"
}

module "s3_bucket" {
  source  = "terraform-aws-modules/s3-bucket/aws"
  version = "3.8.2"

  bucket = local.s3_website_name_cloudfront
  # acl    = "private" @see https://github.com/terraform-aws-modules/terraform-aws-s3-bucket/issues/223

  tags = {
    project = var.project_name_tag
  }

}
