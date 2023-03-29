#!/bin/sh

export AWS_PROFILE=marc-personal
echo "ℹ️  AWS Profile set to: ${AWS_PROFILE}"
echo

echo "ℹ️  Your account has the following S3 buckets:"
echo
aws s3 ls
echo

echo "❔  Please enter a name for the S3 bucket to sync to"
read "-pS3_BUCKET_NAME: " S3_BUCKET_NAME
echo "ℹ️  S3_BUCKET_NAME set to ${S3_BUCKET_NAME}"
echo

echo "🗑  Cleaning up S3 bucket: deleting all files recursively"
aws s3 rm s3://$S3_BUCKET_NAME --recursive
echo

BUILD_DIRECTORY=.next/static
echo "ℹ️  Configured build directory to sync with S3: ${BUILD_DIRECTORY}"
echo

echo "🚀  uploading to S3 "
aws s3 sync $BUILD_DIRECTORY s3://$S3_BUCKET_NAME
