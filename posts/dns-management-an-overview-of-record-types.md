# DNS Management - An Overview of Record Types

Most times when I am working with DNS records, I have to look up the difference between the different types of records. What is the difference again between an `A` record, a `AAAA` record and the `CNAME`? Why do I need to proxy one, but not another one from Cloudflare (my DNS) to Cloudfront (my CDN)? 

And which records do I need in my registrar, which in my DNS provider and which in my CDN provider?

I usually end up in the documentation of AWS or Cloudflare. 

This post provides a simple overview of the different records, hopefully this is helpful when setting up websites.

Record type overview and explanation
- A
- AAAA
- CNAME
- TXT
- MX
- DMARC

Architecture diagram
https://developers.cloudflare.com/dns/manage-dns-records/reference/dns-record-types/
inspiration for architecture diagram: