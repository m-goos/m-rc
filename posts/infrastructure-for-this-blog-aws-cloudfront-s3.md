# Infrastructure for this blog: AWS Cloudfront & S3, Cloudflare for DNS 

This post describes the infrastructure of this website. Let's start with a diagram of the architecture and a list of technologies. After that, I will get into detail.

plaatje met excalidraw

chose for AWS Cloudfront. Why? Because I have experience with it. Surely Cloudflare, Fastly and many others do an equally good job. But I want to keep things easy.

The easiest approach would have been to use a cloud platform like Vercel, Netlify or Heroku

## Terraform modules
Architecture diagram:

Next steps
- Set up S3 bucket: https://registry.terraform.io/modules/terraform-aws-modules/s3-bucket/aws/latest
- Set up Cloudfront distribution: https://registry.terraform.io/modules/terraform-aws-modules/cloudfront/aws/latest
- Set up DNS records for Cloudflare (manually)

## Resources
https://awstip.com/how-to-setup-static-web-hosting-using-s3-and-cloudfront-through-terraform-392a6e1dd29d
