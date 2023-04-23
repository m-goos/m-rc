output "cloudfront_distribution_id" {
  description = "The identifier for the distribution."
  value       = module.cloudfront.cloudfront_distribution_id
}

output "cloudfront_distribution_domain_name" {
  description = "The domain name corresponding to the distribution."
  value       = module.cloudfront.cloudfront_distribution_domain_name
}
