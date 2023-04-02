#!/bin/sh

export AWS_PROFILE=marc-personal
echo "ℹ️  AWS Profile set to: ${AWS_PROFILE}"
echo

# S3_BUCKET_NAME=marc-test-bucket-mrc
S3_BUCKET_NAME=m-rc-test-s3-bucket-name
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

echo
echo "🔗  visit at http://${S3_BUCKET_NAME}.s3-website.eu-central-1.amazonaws.com/"
