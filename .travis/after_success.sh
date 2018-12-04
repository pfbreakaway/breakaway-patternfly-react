#!/bin/bash
set -e

if [ "$TRAVIS_PULL_REQUEST" != "false" ]; then
  echo "We are in a pull request, not releasing"
  exit 0
fi

if [ "${TRAVIS_REPO_SLUG}" == "${TRIGGER_REPO_SLUG}" -a "$TRAVIS_BRANCH" == "${TRIGGER_REPO_BRANCH}" ]; then
  # note: yarn travis-deploy-once "yarn lerna:publish" currently breaks NPM_TOKEN auth context
  export GITHUB_AUTH="${GH_TOKEN}"
  npm run travis-deploy-once "npm run release"
  echo "pwd"
  pwd
  npm run lerna:changelog
  echo "ls -al"
  ls -al
  git add CHANGELOG.md
  echo "git branch"
  git branch
  echo "git status"
  git status
  git commit -m 'chore(changelog): update changelog [skip ci]'
  git push
fi