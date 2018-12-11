const PACKAGE_NAME = process.env.LERNA_PACKAGE_NAME || process.env.npm_package_name;

module.exports = {
  tagFormat: `${PACKAGE_NAME}@\${version}`,
  verifyConditions: [],
  verifyRelease: ['@semantic-release/changelog', '@semantic-release/npm', '@semantic-release/github']
    .map(require)
    .map(x => x.verifyConditions),
  prepare: [
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git'
  ],
  npmPublish: true
};