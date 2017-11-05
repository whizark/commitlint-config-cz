# commitlint-config-cz 

[![npm][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Build status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]

[commitlint][] sharable configuration files.

If `.cz-config.js` that is for [@whizark/cz-cli][] or
[cz-customizable][] exists in your package root directory, its
`{types,scopes,scopeOverrides}` are merged with
`rules.{type-enum,scope-enum}`.

## Installation

Install `commitlint-config-cz` as a local dependency.

```sh
npm install commitlint-config-cz --save-dev
```

## Usage

Extend `commitlint-config-cz` in `commitlint.config.js`.

```js
module.exports = {
    extends: [
        'cz'
    ]
};
```

## Modules & API

There are some modules and API to convert `cz-customizable`'s config into `commitlint`'s config.

### `cz-config.js`

Gets the `.cz-config.js` as an object in the package root.

```javascript
const czConfig = require('commitlint-config-cz/lib/cz-config')();
````

#### `get(path: string): Object`

Gets the `cz-customizable` config object from a path.

```javascript
const getCzConfig = require('commitlint-config-cz/lib/cz-config').get;

const czConfig = getCzConfig('path/to/.cz-config.js');
````

### `scopes.js`

Gets the `value` for [scope-enum][] rule from the `.cz-config.js` in the package root.

```javascript
const scopes = require('commitlint-config-cz/lib/scopes')();
````

#### `get(czConfig: Object): string[]`

Gets the `value` for [scope-enum][] rule from a `cz-customizable` config object.

```javascript
const getScopes = require('commitlint-config-cz/lib/scopes').get;
const czConfig  = { /* `cz-customizable` config object. */ };

const scopes = getScopes(czConfig);
````

### `types.js`

Gets the `value` for [type-enum][] rule from the `.cz-config.js` in the package root.

```javascript
const types = require('commitlint-config-cz/lib/types')();
````

#### `get(czConfig: Object): string[]`

Gets the `value` for [type-enum][] rule from a `cz-customizable` config object.

```javascript
const getTypes = require('commitlint-config-cz/lib/types').get;
const czConfig = { /* `cz-customizable` config object. */ };

const types = getTypes(czConfig);
````

[commitlint]: https://github.com/marionebl/commitlint
[@whizark/cz-cli]: https://github.com/whizark/cz-cli
[cz-customizable]: https://github.com/leonardoanalista/cz-customizable

[npm-image]: https://img.shields.io/npm/v/commitlint-config-cz.svg
[npm-url]: https://www.npmjs.com/commitlint-config-cz

[coveralls-image]: https://coveralls.io/repos/whizark/commitlint-config-cz/badge.svg?branch=master&service=github
[coveralls-url]: https://coveralls.io/github/whizark/commitlint-config-cz?branch=master

[travis-image]: https://travis-ci.org/whizark/commitlint-config-cz.svg?branch=master
[travis-url]: https://travis-ci.org/whizark/commitlint-config-cz

[appveyor-image]: https://ci.appveyor.com/api/projects/status/github/whizark/commitlint-config-cz?branch=master&svg=true
[appveyor-url]: https://ci.appveyor.com/project/whizark/commitlint-config-cz/branch/master

[scope-enum]: http://marionebl.github.io/commitlint/#/reference-rules?id=scope-enum
[type-enum]: http://marionebl.github.io/commitlint/#/reference-rules?id=type-enum
