const HOME_URL = 'https://github.com/semantic-release/semantic-release';
const linkify = releaseInfo =>
  `${releaseInfo.url ? `[${releaseInfo.name}](${releaseInfo.url})` : `\`${releaseInfo.name}\``}`;

module.exports = {
  verifyConditions: [
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git'
  ],
  prepare: [
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git'
  ],
  npmPublish: true,
  successComment: releaseInfos.length <= 1 ? false : `:tada: This ${issue.pull_request ? 'PR is included' : 'issue has been resolved'} in version ${
    nextRelease.version
    } :tada:\n\nThe release is available on ${linkify(releaseInfos[1])}
  Your **[semantic-release](${HOME_URL})** bot :package::rocket:`
};