output "s3_bucket_bucket_regional_domain_name" {
  description = "The bucket region-specific domain name. The bucket domain name including the region name, please refer here for format. Note: The AWS CloudFront allows specifying S3 region-specific endpoint when creating S3 origin, it will prevent redirect issues from CloudFront to S3 Origin URL."
  value       = module.s3_m-rc.s3_bucket_bucket_regional_domain_name
}
# output "s3_bucket_id" {
#   description = "The name of the bucket."
#   value       = module.s3-bucket.s3_bucket_id
# }

# output "s3_bucket_arn" {
#   description = "The ARN of the bucket. Will be of format arn:aws:s3:::bucketname."
#   value       = module.s3-bucket.s3_bucket_arn
# }

# output "s3_bucket_region" {
#   description = "The AWS region this bucket resides in."
#   value       = module.s3-bucket.s3_bucket_region
# }
