#!/bin/bash

export AWS_PROFILE=marc-personal
echo "ℹ️  AWS Profile set to: ${AWS_PROFILE}"
echo

echo "terraform init, then terraform plan"
echo
terraform init -var-file="variables.tfvars"
terraform plan -var-file="variables.tfvars"
