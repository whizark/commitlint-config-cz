# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.12.1](https://github.com/whizark/commitlint-config-cz/compare/v0.12.0...v0.12.1) (2019-08-04)

<a name="0.12.0"></a>
# [0.12.0](https://github.com/whizark/commitlint-config-cz/compare/v0.11.1...v0.12.0) (2019-06-16)


### Bug Fixes

* **deps:** update dependency app-root-path to ~2.2.0 ([8f06c50](https://github.com/whizark/commitlint-config-cz/commit/8f06c50))


### ci

* drop Node 6 support, add Node 12 ([04c106d](https://github.com/whizark/commitlint-config-cz/commit/04c106d))


### BREAKING CHANGES

* Node 6 support has been dropped due to EOL.



<a name="0.11.1"></a>
## [0.11.1](https://github.com/whizark/commitlint-config-cz/compare/v0.11.0...v0.11.1) (2019-01-10)


### Bug Fixes

* **peer-deps:** update peerDep [@commitlint](https://github.com/commitlint)/cli from 7.0.x to 7.x.x ([2d61d1d](https://github.com/whizark/commitlint-config-cz/commit/2d61d1d)) (sharvit)



<a name="0.11.0"></a>
# [0.11.0](https://github.com/whizark/commitlint-config-cz/compare/v0.10.1...v0.11.0) (2018-12-24)


### Features

* support `config.cz-customizable.config` entry in `package.json` ([753036d](https://github.com/whizark/commitlint-config-cz/commit/753036d)) (zman)



<a name="0.10.1"></a>
## [0.10.1](https://github.com/whizark/commitlint-config-cz/compare/v0.10.0...v0.10.1) (2018-08-23)


### Bug Fixes

* error is thrown if there's no scope-{enum,type} rule at all ([1dc784e](https://github.com/whizark/commitlint-config-cz/commit/1dc784e)), closes [#3](https://github.com/whizark/commitlint-config-cz/issues/3)



<a name="0.10.0"></a>
## 0.10.0 (2018-06-22)

* bump version to 0.10.0 ([13c0ea7](https://github.com/whizark/commitlint-config-cz/commit/13c0ea7))
* update @commitlint/cli to 7.0.0 ([673019c](https://github.com/whizark/commitlint-config-cz/commit/673019c))
* update dev dependencies ([f0af131](https://github.com/whizark/commitlint-config-cz/commit/f0af131))



<a name="0.9.0"></a>
## 0.9.0 (2018-05-25)

* add Node 10 for Travis CI ([017c594](https://github.com/whizark/commitlint-config-cz/commit/017c594))
* bump version to 0.9.0 ([b44d6bf](https://github.com/whizark/commitlint-config-cz/commit/b44d6bf))
* drop Node 4, 7 support ([942a85b](https://github.com/whizark/commitlint-config-cz/commit/942a85b))
* remove Node 4/7, add 9/10 for Appveyor ([c0ba1af](https://github.com/whizark/commitlint-config-cz/commit/c0ba1af))
* support @commitlint/cli 6.2.0 ([5800d7b](https://github.com/whizark/commitlint-config-cz/commit/5800d7b))
* update dev dependencies ([c072db5](https://github.com/whizark/commitlint-config-cz/commit/c072db5))
* use `npm update` with `--no-save` on Travis CI ([c2b1dfd](https://github.com/whizark/commitlint-config-cz/commit/c2b1dfd)), closes [#1](https://github.com/whizark/commitlint-config-cz/issues/1)



<a name="0.8.0"></a>
## 0.8.0 (2018-02-23)

* add Node 9 for Travis CI ([e69a2b8](https://github.com/whizark/commitlint-config-cz/commit/e69a2b8))
* bump version to 0.8.0 ([a70eb3e](https://github.com/whizark/commitlint-config-cz/commit/a70eb3e))
* update commitlint to 6.1.2 ([2d91607](https://github.com/whizark/commitlint-config-cz/commit/2d91607))
* update dev dependencies ([d970a21](https://github.com/whizark/commitlint-config-cz/commit/d970a21))
* update dev dependency ([a516fe3](https://github.com/whizark/commitlint-config-cz/commit/a516fe3))



<a name="0.7.0"></a>
## 0.7.0 (2017-11-05)

* add description about config conversion feature ([58c0827](https://github.com/whizark/commitlint-config-cz/commit/58c0827))
* add docs for Modules & API ([c3ef3f4](https://github.com/whizark/commitlint-config-cz/commit/c3ef3f4))
* add JSDoc to API functions ([4ea7d9f](https://github.com/whizark/commitlint-config-cz/commit/4ea7d9f))
* add new module & API for config conversion ([1b387f2](https://github.com/whizark/commitlint-config-cz/commit/1b387f2)), closes [#2](https://github.com/whizark/commitlint-config-cz/issues/2)
* add summary to Module & API section ([94bfeff](https://github.com/whizark/commitlint-config-cz/commit/94bfeff))
* bump version to 0.7.0 ([c37afef](https://github.com/whizark/commitlint-config-cz/commit/c37afef))
* fix config.js description ([6b78802](https://github.com/whizark/commitlint-config-cz/commit/6b78802))
* make language of fenced code block consistent ([2cb6e3c](https://github.com/whizark/commitlint-config-cz/commit/2cb6e3c))
* refactor variable name to clarify config for cz-customizable ([887ab40](https://github.com/whizark/commitlint-config-cz/commit/887ab40))
* refactor variable names in test ([2b0f25a](https://github.com/whizark/commitlint-config-cz/commit/2b0f25a))
* remove default rules except for `type-enum`, `scope-enum` ([749122c](https://github.com/whizark/commitlint-config-cz/commit/749122c))
* remove NLP-related rules ([9feaf18](https://github.com/whizark/commitlint-config-cz/commit/9feaf18))


### BREAKING CHANGE

* Now commitlint-config-cz provides only `type-enum`,
`scope-enum` rules by the default.
In case that you need other rules, you may override other config with
commitlint-config-cz rules.

```js
module.exports = {
    extends: [
        'other-config',
        'cz'
    ]
};
```


<a name="0.6.0"></a>
## 0.6.0 (2017-11-04)

* bump version to 0.6.0 ([24ab6fb](https://github.com/whizark/commitlint-config-cz/commit/24ab6fb))
* change case options to kebab-case ([e9cfdeb](https://github.com/whizark/commitlint-config-cz/commit/e9cfdeb))
* update commitlint to 4.2.2 ([e8e7f01](https://github.com/whizark/commitlint-config-cz/commit/e8e7f01))
* update dev dependencies ([770f553](https://github.com/whizark/commitlint-config-cz/commit/770f553))



<a name="0.5.0"></a>
## 0.5.0 (2017-08-10)

* add new `signed-off-by` rule ([3740ff0](https://github.com/whizark/commitlint-config-cz/commit/3740ff0))
* bump version to 0.5.0 ([29aaf59](https://github.com/whizark/commitlint-config-cz/commit/29aaf59))
* fix incorrect config example in README.md ([cc0a092](https://github.com/whizark/commitlint-config-cz/commit/cc0a092))
* update @commitlint/cli to 3.1.2 ([7f1c5ef](https://github.com/whizark/commitlint-config-cz/commit/7f1c5ef))
* update dev dependencies ([dc2bede](https://github.com/whizark/commitlint-config-cz/commit/dc2bede))



<a name="0.4.0"></a>
## 0.4.0 (2017-07-20)

* add `commitlint-config` to `keywords` in package.json ([c5bd3bc](https://github.com/whizark/commitlint-config-cz/commit/c5bd3bc))
* add Node.js 8 for Travis CI, AppVeyor ([be33db7](https://github.com/whizark/commitlint-config-cz/commit/be33db7))
* bump version to 0.4.0 ([1a7e708](https://github.com/whizark/commitlint-config-cz/commit/1a7e708))
* fix incorrect config file name in README.md ([8f54a8e](https://github.com/whizark/commitlint-config-cz/commit/8f54a8e))
* remove `npm prune` from CI build ([461199d](https://github.com/whizark/commitlint-config-cz/commit/461199d)), closes [#17797](https://github.com/whizark/commitlint-config-cz/issues/17797)
* remove `wildcards` entry ([4f5fc4b](https://github.com/whizark/commitlint-config-cz/commit/4f5fc4b))
* replace conventional-changelog-lint to commitlint ([a078090](https://github.com/whizark/commitlint-config-cz/commit/a078090))
* update `conventional-changelog-lint` as `peerDependencies` ([8babbee](https://github.com/whizark/commitlint-config-cz/commit/8babbee))
* update dev dependencies ([c5b6834](https://github.com/whizark/commitlint-config-cz/commit/c5b6834))
* update notification setting for Slack ([0d0d6ae](https://github.com/whizark/commitlint-config-cz/commit/0d0d6ae))
* update npm API key ([a6f2d20](https://github.com/whizark/commitlint-config-cz/commit/a6f2d20))
* use `npm install` until `npm update` issue is resolved ([5f309db](https://github.com/whizark/commitlint-config-cz/commit/5f309db))



<a name="0.3.0"></a>
## 0.3.0 (2017-04-04)

* bump version to 0.3.0 ([201fa10](https://github.com/whizark/commitlint-config-cz/commit/201fa10))
* turn the severities of `{body,footer}-tense` rules into warning ([c56dd22](https://github.com/whizark/commitlint-config-cz/commit/c56dd22))
* update dependencies ([a6e1bc6](https://github.com/whizark/commitlint-config-cz/commit/a6e1bc6))



<a name="0.2.0"></a>
## 0.2.0 (2016-12-10)

* add AppVeyor badge to README.md ([e21720c](https://github.com/whizark/commitlint-config-cz/commit/e21720c))
* add AppVeyor config ([b204b3d](https://github.com/whizark/commitlint-config-cz/commit/b204b3d))
* bump version to 0.2.0 ([07be0a1](https://github.com/whizark/commitlint-config-cz/commit/07be0a1))
* disable shallow clone for AppVeyor ([b1be017](https://github.com/whizark/commitlint-config-cz/commit/b1be017))
* explicitly update npm to the latest version in `.travis.yml` ([f381be7](https://github.com/whizark/commitlint-config-cz/commit/f381be7))
* make the default value for `type-enum` rule empty ([7f2c386](https://github.com/whizark/commitlint-config-cz/commit/7f2c386))
* use `--save-dev` rather than `--save` for installation ([db18896](https://github.com/whizark/commitlint-config-cz/commit/db18896))



<a name="0.1.1"></a>
## <small>0.1.1 (2016-12-02)</small>

* add coveralls badge to README.md ([f5e8f42](https://github.com/whizark/commitlint-config-cz/commit/f5e8f42))
* add tests ([643475d](https://github.com/whizark/commitlint-config-cz/commit/643475d))
* bump version to 0.1.1 ([3d75584](https://github.com/whizark/commitlint-config-cz/commit/3d75584))
* export `cz-config.js` loader function ([978990a](https://github.com/whizark/commitlint-config-cz/commit/978990a))
* export default types, scopes ([bfd5946](https://github.com/whizark/commitlint-config-cz/commit/bfd5946))
* fix issue that `.cz-config.js` isn't load ([aa38aa7](https://github.com/whizark/commitlint-config-cz/commit/aa38aa7))
* fix issue that `scopeOverrides` is never merged ([d0b2aee](https://github.com/whizark/commitlint-config-cz/commit/d0b2aee))
* fix issue that scopes is always empty ([8fbd0dd](https://github.com/whizark/commitlint-config-cz/commit/8fbd0dd))
* fix repo name in `.travis.yml` for deploy ([afba42d](https://github.com/whizark/commitlint-config-cz/commit/afba42d))
* silently run npm scripts ([1010a33](https://github.com/whizark/commitlint-config-cz/commit/1010a33))



<a name="0.1.0"></a>
## 0.1.0 (2016-12-01)

* add .travis.yml for Travis CI ([1211226](https://github.com/whizark/commitlint-config-cz/commit/1211226))
* add `perf` as a default type ([895787b](https://github.com/whizark/commitlint-config-cz/commit/895787b))
* add config files ([18645c4](https://github.com/whizark/commitlint-config-cz/commit/18645c4))
* add initial package files ([dba6dfe](https://github.com/whizark/commitlint-config-cz/commit/dba6dfe))
* add introduction to README.md ([9a31514](https://github.com/whizark/commitlint-config-cz/commit/9a31514))
* bump version to 0.1.0 ([5d3fd7a](https://github.com/whizark/commitlint-config-cz/commit/5d3fd7a))
* fix broken installation test ([403c261](https://github.com/whizark/commitlint-config-cz/commit/403c261))
* fix incorrect copyright year ([43d7d48](https://github.com/whizark/commitlint-config-cz/commit/43d7d48))
* fix incorrect usage explanation ([dabab61](https://github.com/whizark/commitlint-config-cz/commit/dabab61))
* improve `wildcards` messages for merge and pull request ([edd9eb2](https://github.com/whizark/commitlint-config-cz/commit/edd9eb2))
* prepare repository ([4a8b8ab](https://github.com/whizark/commitlint-config-cz/commit/4a8b8ab))
* remove `release` from `wildcards` ([d5b2204](https://github.com/whizark/commitlint-config-cz/commit/d5b2204))
* rename repo/package name to `conventional-changelog-lint-config-cz` ([50883d3](https://github.com/whizark/commitlint-config-cz/commit/50883d3))
* use latest `conventional-changelog-lint` as devDependencies ([18ea8fb](https://github.com/whizark/commitlint-config-cz/commit/18ea8fb))
* use reference for link to `conventional-changelog-lint` ([cc9341a](https://github.com/whizark/commitlint-config-cz/commit/cc9341a))
