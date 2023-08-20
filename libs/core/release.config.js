const name = 'core';
const srcRoot = `libs/${name}`;

const config = [
  [
    '@semantic-release/changelog',
    {
      changelogFile: `${srcRoot}/CHANGELOG.md`,
    },
  ],
  [
    '@semantic-release/git',
    {
      assets: [`${srcRoot}/CHANGELOG.md`, `${srcRoot}/package.json`],
      message: `release(${name}): $\{nextRelease.version} [skip ci]\n\n$\{nextRelease.notes}`,
    },
  ],
  '@semantic-release/npm',
];

module.exports = config;
