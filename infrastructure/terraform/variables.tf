# this file describes all available terraform variables

variable "aws_region" {
  type        = string
  description = "AWS region for all configuration"
  default     = "eu-central-1"
}

variable "project_name_tag" {
  type        = string
  description = "Tag for all resources in this project"
  default     = "m-rc.nl"
}

variable "domain_name" {
  type        = string
  description = "Website URL"
  default     = "m-rc.nl"
}
variable "cloudflare_api_token" {
  type      = string
  sensitive = true
}

# configure iam role for github runner
variable "ssm_enabled" {
  type        = bool
  description = <<-EOT
    Set `true` to store secrets in SSM Parameter Store,
    `false` to store secrets in Terraform state as outputs.
    Since Terraform state would contain the secrets in plaintext,
    use of SSM Parameter Store is recommended.
    EOT
  default     = true
}

variable "ssm_base_path" {
  type        = string
  description = "Prefix for ssm parameters"
}
