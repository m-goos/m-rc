#!/bin/sh

echo "ℹ️  Please run this script from the project root folder"
echo

export AWS_PROFILE=marc-personal
echo "ℹ️  AWS Profile set to: ${AWS_PROFILE}"
echo

export CLOUDFRONT_ID=EWXWBUO12ME1G
echo "ℹ️  Cloudfront ID set to: ${CLOUDFRONT_ID}"
echo

S3_BUCKET_NAME=m-rc-test-private
echo "ℹ️  S3_BUCKET_NAME set to ${S3_BUCKET_NAME}"
echo

echo "⚒  Building and exporting"
npm run build && npm run export
echo

echo "🗑  Cleaning up S3 bucket: deleting all files recursively"
aws s3 rm s3://$S3_BUCKET_NAME --recursive
echo

BUILD_DIRECTORY=out/
echo "ℹ️  Configured build directory to sync with S3: ${BUILD_DIRECTORY}"
echo

echo "🚀  uploading to S3 "
aws s3 sync $BUILD_DIRECTORY s3://$S3_BUCKET_NAME

echo "🧨  creating cloudfront invalidation"
INVALIDATION_ID=$(aws cloudfront create-invalidation --distribution-id ${CLOUDFRONT_ID} --paths "/*" | jq -r '.Invalidation.Id')

echo "👀  awaiting cloudfront invalidation"
aws cloudfront wait invalidation-completed --distribution-id ${CLOUDFRONT_ID} --id ${INVALIDATION_ID}
