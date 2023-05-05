
# TODO next:
# https://github.com/terraform-aws-modules/terraform-aws-acm/tree/v4.3.2/examples/complete-dns-validation-with-cloudflare


# next steps, follow this:
# Providing simple steps in UI: https://advancedweb.hu/how-to-use-a-custom-domain-on-cloudfront-with-cloudflare-managed-dns/

# Stuck on the following error:
# https://developers.cloudflare.com/dns/manage-dns-records/troubleshooting/records-with-same-name/

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
}

data "cloudflare_zone" "m-rc" {
  name = var.domain_name
}
