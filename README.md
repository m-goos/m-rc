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

## Setup

### Run

```sh
pnpm install
pnpm dev
```

### Production build: local build and serve

```
pnpm build-open
```

### Pre-commit hooks

The project is set up with a few pre-commit hooks that are installed when `pnpm install` is ran. Specifically:

- linting: eslint
- formatting: prettier
- typescript
- terraform validation
- terraform formatting

When terraform is not set up correctly, for example the AWS S3 where terraform state is stored, the terraform hooks will fail.

To run the pre-commit hooks, from root: `./.husky/pre-commit`

### Commit: Conventional commit messages - "feat(layout):..."

This project mostly follows the "conventional commit" message standard, for an easily scannable commit history. See the `angular` commit guidelines for more details (docs: [feat/fix/..](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#type)).

To adhere to this format, some tooling is installed that can also be used to automatically generate a changelog based on commits: `commitizen` (`cz`). To commit following these guidelines:

```sh
pnpm commit
# for a fast commit, just use `git commit`
```

Note: a commit will fail when the pre-commit hooks fail, so generally it makes sense to:

1. Add a change (`git add my-file`)
2. Run the pre-commit hooks `./.husky/pre-commit`
3. Commit: `pnpm commit`

These hooks catch problems before a commit exists, which is faster than waiting on CI. GitHub Actions runs the same checks (plus the build and smoke tests) on every pull request, so the hooks are a first line of defence rather than the only one.

### Terraform

```sh
# cd into terraform
$ pwd
/m-rc/infrastructure/terraform

# init terraform - requires setting up AWS profile
../scripts/terraform-plan.sh

```

## Deploying

Merging to `main` deploys. GitHub Actions builds the site, runs the smoke tests, and only then syncs `out/` to S3 and invalidates the CloudFront distribution — see `.github/workflows/ci.yml`. Failing tests block the deploy.

The manual route below is the fallback, for when you want to push a build without going through `main`.

- Set up and configure the `aws cli` - AWS CLI [docs](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html).

Scope permissions to:

- just the required S3 bucket for the website and
- invalidation of the cloudfront distribution relevant for m-rc.nl

To deploy directly to S3, run from the project root folder:

```sh
$ ./infrastructure/scripts/sync-s3-bucket.sh
```

The script makes a couple assumptions, such as a pre-configured AWS account and an S3 bucket name. It's a bit crude in the sense that it simply deletes the contents of the S3 bucket and pushes the build, but it's fast and functional. (it would be more elegant to only upload what's changed)

## Next steps

[To do list for this website](TODO.md)

## Optimizing image size

To improve website loading times, see [Optimizing image dimensions and file size
](public-unoptimized/OPTIMIZE_IMAGES.md)
