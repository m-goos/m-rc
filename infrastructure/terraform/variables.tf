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

variable "cloudflare_api_token" {
  type      = string
  sensitive = true
}

variable "cloudflare_zone_id" {
  type      = string
  sensitive = true
}
