# this file describes all available terraform variables

variable "aws_region" {
  type        = string
  description = "AWS region for all configuration"
  default     = "eu-central-1"
}
