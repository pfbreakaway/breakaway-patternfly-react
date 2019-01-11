#!/bin/bash
set -e

if [ "$TRAVIS_PULL_REQUEST" != "false" ]; then
  echo "We are in a pull request, not releasing"
  exit 0
fi

if [ "${TRAVIS_REPO_SLUG}" == "${TRIGGER_REPO_SLUG}" -a "$TRAVIS_BRANCH" == "${TRIGGER_REPO_BRANCH}" ]; then
  # note: yarn travis-deploy-once "yarn lerna:publish" currently breaks NPM_TOKEN auth context
  # export env variables declared in travis config
  export GITHUB_AUTH="${GH_TOKEN}"
  export GH_TOKEN="${GH_TOKEN}"
  export GH_USER="${GH_USERNAME}"
  npm run travis-deploy-once "npm run release_2"
fi