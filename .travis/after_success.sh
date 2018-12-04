#!/bin/bash
set -e

if [ "$TRAVIS_PULL_REQUEST" != "false" ]; then
  echo "We are in a pull request, not releasing"
  exit 0
fi

if [ "${TRAVIS_REPO_SLUG}" == "${TRIGGER_REPO_SLUG}" -a "$TRAVIS_BRANCH" == "${TRIGGER_REPO_BRANCH}" ]; then
  npm run travis-deploy-once "npm run release"
fi