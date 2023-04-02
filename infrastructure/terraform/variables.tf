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
