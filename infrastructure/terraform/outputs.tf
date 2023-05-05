# Cloudfront
output "cloudfront_distribution_id" {
  description = "The identifier for the distribution."
  value       = module.cloudfront.cloudfront_distribution_id
}

output "cloudfront_distribution_domain_name" {
  description = "The domain name corresponding to the distribution."
  value       = module.cloudfront.cloudfront_distribution_domain_name
}

# S3
output "s3_bucket_bucket_regional_domain_name" {
  description = "The bucket region-specific domain name. The bucket domain name including the region name, please refer here for format. Note: The AWS CloudFront allows specifying S3 region-specific endpoint when creating S3 origin, it will prevent redirect issues from CloudFront to S3 Origin URL."
  value       = module.s3_m-rc.s3_bucket_bucket_regional_domain_name
}

# ACM
output "distinct_domain_names" {
  description = "List of distinct domains names used for the validation."
  value       = module.acm.distinct_domain_names
}

output "validation_domains" {
  description = "List of distinct domain validation options. This is useful if subject alternative names contain wildcards."
  value       = module.acm.validation_domains
}
output "acm_certificate_arn" {
  description = "The ARN of the certificate"
  value       = module.acm.acm_certificate_arn
}
