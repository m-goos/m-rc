#!/bin/bash

export AWS_PROFILE=marc-personal
echo "ℹ️  AWS Profile set to: ${AWS_PROFILE}"
echo

S3_BUCKET_NAME=m-rc.nl-terraform-state
echo "ℹ️  S3_BUCKET_NAME set to ${S3_BUCKET_NAME}"
echo

echo "✨  Creating S3 bucket for remote terraform state"
echo

aws s3api create-bucket --bucket ${S3_BUCKET_NAME} --region eu-central-1 --create-bucket-configuration LocationConstraint=eu-central-1

echo "🔒  Enabling server-side encryption for ${S3_BUCKET_NAME}"
echo

aws s3api put-bucket-encryption --bucket ${S3_BUCKET_NAME} --server-side-encryption-configuration "{\"Rules\": [{\"ApplyServerSideEncryptionByDefault\":{\"SSEAlgorithm\": \"AES256\"}}]}"

echo "✋  Setting public access block"
echo

S3_ACL="BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true"

aws s3api put-public-access-block --bucket ${S3_BUCKET_NAME} --public-access-block-configuration ${S3_ACL}

echo
aws s3api get-public-access-block --bucket ${S3_BUCKET_NAME}
