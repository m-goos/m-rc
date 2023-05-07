resource "cloudflare_record" "validation" {
  count = length(module.acm.distinct_domain_names)

  zone_id = data.cloudflare_zone.m-rc.id
  name    = element(module.acm.validation_domains, count.index)["resource_record_name"]
  type    = element(module.acm.validation_domains, count.index)["resource_record_type"]
  value   = trimsuffix(element(module.acm.validation_domains, count.index)["resource_record_value"], ".")
  ttl     = 60
  proxied = false

  allow_overwrite = false

  comment = "For validation ACM certificate for ${var.domain_name}"
}

resource "cloudflare_record" "m-rc" {
  zone_id = data.cloudflare_zone.m-rc.id
  name    = var.domain_name
  value   = module.cloudfront.cloudfront_distribution_domain_name
  type    = "CNAME"
  ttl     = 60
  proxied = false

  comment = "Managed by Terraform"
}

resource "cloudflare_record" "www" {
  zone_id = data.cloudflare_zone.m-rc.id
  name    = "www.${var.domain_name}"
  value   = module.cloudfront.cloudfront_distribution_domain_name
  type    = "CNAME"
  ttl     = 60
  proxied = false

  comment = "Managed by Terraform"
}

data "cloudflare_zone" "m-rc" {
  name = var.domain_name
}
