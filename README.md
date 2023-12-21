# m-rc.nl

This repository consists of two parts:

- a Next.js app styled with TailwindCSS
- infrastructure defined in Terraform in `infrastructure/`

The goal of this repository is to

1. Explore different technologies such as
   1. NextJS,
   2. Terraform / Infrastructure,
   3. Github actions CI/CD
   4. and more..
2. Build a simple personal blog.

## Optimizing image size

To improve website loading times, see [Optimizing image dimensions and file size
](public-unoptimized/OPTIMIZE_IMAGES.md)

## Deploying

To deploy directly to S3, run from the project root folder:

```sh
$ ./infrastructure/scripts/sync-s3-bucket.sh
```

The script makes a couple assumptions, such as a pre-configured AWS account and an S3 bucket name.
