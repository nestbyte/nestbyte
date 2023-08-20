const name = 'core';
const srcRoot = `libs/${name}`;

const config = {
  pkgRoot: `dist/${srcRoot}`,
  tagFormat: name + '-v${version}',
  commitPaths: [`${srcRoot}/*`],
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
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
    '@semantic-release/github',
  ],
};

module.exports = config;
