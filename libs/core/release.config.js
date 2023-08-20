const name = 'core';
const srcRoot = `libs/${name}`;

const config = {
  extends: 'release.config.base.js',
  pkgRoot: `dist/${srcRoot}`,
  tagFormat: name + '-v${version}',
  commitPaths: [`${srcRoot}/*`],
  plugins: [
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
  ],
};

module.exports = config;
