module "cloudfront" {
  source  = "terraform-aws-modules/cloudfront/aws"
  version = "3.2.1"

  tags = {
    project = var.project_name_tag
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  create_origin_access_control = true
  origin_access_control = {
    s3_oac = {
      description      = "CloudFront access to S3 for m-rc-test-private"
      origin_type      = "s3"
      signing_behavior = "always"
      signing_protocol = "sigv4"
    }
  }

  origin = {
    s3_oac = { # origin access control settings
      domain_name           = module.s3_m-rc_test-private.s3_bucket_bucket_regional_domain_name
      origin_access_control = "s3_oac" # key in `origin_access_control`
    }
  }

  default_cache_behavior = {
    target_origin_id       = "s3_oac"
    viewer_protocol_policy = "redirect-to-https"

    allowed_methods = ["GET", "HEAD", "OPTIONS"]
    cached_methods  = ["GET", "HEAD"]
    compress        = true
  }

  custom_error_response = [{
    error_code         = 404
    response_code      = 404
    response_page_path = "/index.html"
    }, {
    error_code         = 403
    response_code      = 403
    response_page_path = "/index.html"
  }]
}
