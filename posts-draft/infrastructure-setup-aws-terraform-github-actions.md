# Quick start guide for AWS and Github runners with Terraform

- set up AWS account
- set up terraform locally using brew
- install AWS CLI and create script to populate bucket locally
- terraform open source modules and examples in github repositories
- copy steps to github runner

I think you had to create AWS account
I have that for some years. Sign up for a free tier account, something like this, you’ll also have to link your credit card but as long as you don’t run many resources it should not cost any many
https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&al[…]f.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all
do something in AWS
What do you mean? For github actions? I just created an IAM role using an open source terraform module.
It’s this commit from yesterday: https://github.com/m-goos/m-rc/commits/main --> https://github.com/m-goos/m-rc/commit/fa4f22c31a375d473437e00e569f975353f3429b
You can step through my commits from yesterday, the commit messages should describe what happens and why
 follow some docs to setup terraform locally,
Just install terraform and the awscli with brew and configure your AWS credentials:  https://docs.aws.amazon.com/sdk-for-php/v3/developer-guide/guide_credentials_profiles.html (edited) 
