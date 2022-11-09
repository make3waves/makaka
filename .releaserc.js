module.exports = {
  branches: [
    {
      name: 'main',
    },
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'CHANGELOG.md'],
        message: 'release: v${nextRelease.version} [skip ci] \n\n${nextRelease.notes}',
      },
    ],
    '@semantic-release/github',
  ],
}
