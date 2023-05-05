# FOR REFERENCE:
# https://github.com/terraform-aws-modules/terraform-aws-acm/tree/v4.3.2/examples/complete-dns-validation-with-cloudflare
# Providing simple steps in UI: https://advancedweb.hu/how-to-use-a-custom-domain-on-cloudfront-with-cloudflare-managed-dns/

# Stuck on the following error:
# https://developers.cloudflare.com/dns/manage-dns-records/troubleshooting/records-with-same-name/

# Removed an AAAA record with the following content:
# (see google keep)
# NEXT STEP: just do an apply again, I manually removed the AAAA record
# an apply did not work last time - the record might need a minute to disappear from DNS

# TODO: Fix this error from terraform fmt in the githook for commits:
# Error: registry.terraform.io/cloudflare/cloudflare: the cached package for registry.terraform.io/cloudflare/cloudflare 4.4.0 (in .terraform/providers) does not match any of the checksums recorded in the dependency lock file
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

resource "cloudflare_record" "m-rc" {
  zone_id = data.cloudflare_zone.m-rc.id
  name    = var.domain_name
  value   = module.cloudfront.cloudfront_distribution_domain_name
  type    = "CNAME"
  ttl     = 60
  proxied = false
}

data "cloudflare_zone" "m-rc" {
  name = var.domain_name
}
