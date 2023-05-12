---
title: 'Automated code quality checks for React projects'
date: '2023-03-28'
---

# Automated code quality checks for React projects

Every time I set up a new web project, some basic automated quality checks need to be configured. Whether these quality checks just run locally, for CI/CD or both.

- formatting: prettier
  - prettier tailwind plugin
- code style: eslint
- git history quality: conventional commit
- husky for git hooks
  - commit message hook: conventional commit
  - format on every `git add`
  - check for types on commit