terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.65"
    }

    # cloudflare = {
    #   source  = "cloudflare/cloudflare"
    #   version = "~> 4.4.0"
    # }
  }
  backend "s3" {
    bucket  = "m-rc.nl-terraform-state"
    key     = "m-rc.nl.tfstate"
    region  = "eu-central-1"
    encrypt = true
  }
  required_version = ">= 1.4" # terraform version
}

provider "aws" {
  region = var.aws_region
}

# provider "cloudflare" {
#   api_token = var.cloudflare_api_token
# }
