const hooks = require('semantic-release-monorepo-hooks');
const output = hooks();
const PACKAGE_NAME = process.env.LERNA_PACKAGE_NAME || process.env.npm_package_name;

module.exports = {
  branch: 'master',
  tagFormat: `${PACKAGE_NAME}@\${version}`,
  prepare: [
    '@semantic-release/changelog',
    '@semantic-release/npm',
    {
      'path': '@semantic-release/git',
      'message': 'chore(' + output.package + '): release ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
    }
  ],
  publish: [
    '@semantic-release/npm'
  ],
  verifyConditions: [
    '@semantic-release/npm',
    '@semantic-release/git'
  ],
  monorepo: {
    analyzeCommits: [
      '@semantic-release/commit-analyzer'
    ],
    generateNotes: [
      '@semantic-release/release-notes-generator'
    ]
  }
};