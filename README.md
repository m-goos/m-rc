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
npm i
npm run dev
```

### Production build: local build and serve

```
npm run build-open
```

### Pre-commit hooks

The project is set up with a few pre-commit hooks that are installed when `npm i` is ran. Specifically:

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
npm run commit
# for a fast commit, just use `git commit`
```

Note: a commit will fail when the pre-commit hooks fail, so generally it makes sense to:

1. Add a change (`git add my-file`)
2. Run the pre-commit hooks `./.husky/pre-commit`
3. Commit: `npm run commit`

Given there is no CI set up in github (yet), this has been a straightforward and fast way to enforce some level of commit quality locally.

### Terraform

```sh
# cd into terraform
$ pwd
/m-rc/infrastructure/terraform

# init terraform - requires setting up AWS profile
../scripts/terraform-plan.sh

```

## Deploying

To deploy directly to S3, run from the project root folder:

```sh
$ ./infrastructure/scripts/sync-s3-bucket.sh
```

The script makes a couple assumptions, such as a pre-configured AWS account and an S3 bucket name.

## Next steps

[To do list for this website](TODO.md)

## Optimizing image size

To improve website loading times, see [Optimizing image dimensions and file size
](public-unoptimized/OPTIMIZE_IMAGES.md)
