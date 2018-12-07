const HOME_URL = 'https://github.com/semantic-release/semantic-release';
const linkify = releaseInfo =>
  `${releaseInfo.url ? `[${releaseInfo.name}](${releaseInfo.url})` : `\`${releaseInfo.name}\``}`;

module.exports = (issue, releases, nextRelease) => {
  return {
    verifyConditions: [],
    verifyRelease: ['@semantic-release/changelog', '@semantic-release/npm', '@semantic-release/github']
      .map(require)
      .map(x => x.verifyConditions),
    prepare: [
      '@semantic-release/changelog',
      '@semantic-release/npm',
      '@semantic-release/git'
    ],
    npmPublish: true,
    successComment: releases.length <= 1 ? false : `:tada: This ${issue.pull_request ? 'PR is included' : 'issue has been resolved'} in version ${
      nextRelease.version
      } :tada:\n\nThe release is available on ${linkify(releases[1])}
    Your **[semantic-release](${HOME_URL})** bot :package::rocket:`
  }
};