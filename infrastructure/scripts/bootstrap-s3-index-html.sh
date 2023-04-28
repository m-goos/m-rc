#!/bin/sh

export AWS_PROFILE=marc-personal
echo "ℹ️  AWS Profile set to: ${AWS_PROFILE}"
echo

export CLOUDFRONT_ID=EWXWBUO12ME1G
echo "ℹ️  Cloudfront ID set to: ${CLOUDFRONT_ID}"
echo

# needs index.html in root
aws s3api put-object --bucket m-rc.nl --key index.html --body index.html --content-type text/html

echo "🧨  creating cloudfront invalidation"
aws cloudfront create-invalidation --distribution-id ${CLOUDFRONT_ID} --paths "/*"
