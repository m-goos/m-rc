resource "aws_cloudfront_function" "rewriteUri" {
  name    = "rewriteUriSpa"
  runtime = "cloudfront-js-1.0"
  code    = file("${path.root}/../cloudfront-functions/rewrite-spa-uri.js")
  publish = true
  comment = "NextJS files are not found based on URI because of how next export works with S3. This function appends .html to the files, so they are found via their URI."
}
