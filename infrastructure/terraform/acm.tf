# certificate created in AWS ACM
# DNS record set in Cloudflare

module "acm" {
  source  = "terraform-aws-modules/acm/aws"
  version = "4.3.2"

  tags = {
    project = var.project_name_tag
  }

  # not sure if this is necessary
  # providers = {
  #   aws = aws.us-east-1
  # }

  domain_name = var.domain_name
  # zone_id     = data.cloudflare_zone.this.id # assumption: this is incorrect. 


  subject_alternative_names = [
    "*.${var.domain_name}",
    "playground.${var.domain_name}",
  ]

  create_route53_records  = false
  validation_record_fqdns = cloudflare_record.validation[*].hostname

}
