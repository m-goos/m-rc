
# TODO next:
# https://github.com/terraform-aws-modules/terraform-aws-acm/tree/v4.3.2/examples/complete-dns-validation-with-cloudflare


# next steps, follow this:
# Providing simple steps in UI: https://advancedweb.hu/how-to-use-a-custom-domain-on-cloudfront-with-cloudflare-managed-dns/
# 1. add ACM certificate to cloudfront
# 2. 

# NOTE: TO UPDATE: ACM & Cloudfront will only work from US-EAST-1.

resource "cloudflare_record" "validation" {
  count = length(module.acm.distinct_domain_names)

  zone_id = data.cloudflare_zone.m-rc.id
  name    = element(module.acm.validation_domains, count.index)["resource_record_name"]
  type    = element(module.acm.validation_domains, count.index)["resource_record_type"]
  value   = trimsuffix(element(module.acm.validation_domains, count.index)["resource_record_value"], ".")
  ttl     = 60
  proxied = false

  allow_overwrite = false
}

data "cloudflare_zone" "m-rc" {
  name = var.domain_name
}
