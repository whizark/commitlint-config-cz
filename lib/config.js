'use strict';

const cloneDeep = require('lodash.clonedeep');
const CzConfig  = require('./cz-config');
const Scopes    = require('./scopes');
const Types     = require('./types');

const defaults = {
    rules: {
        'scope-enum': [
            2,
            'always',
            [],
        ],
        'type-enum' : [
            2,
            'always',
            [],
        ],
    },
};

/**
 * Gets the commitlint config converted from a cz-customizable config.
 *
 * @param {string|Object} pathOrCzConfig The path to a cz-customizable config file, or a cz-customizable config object.
 * @param {Object} defaultConfig The default commitlint config.
 *
 * @returns {Object} The converted commitlint config.
 */
function get(pathOrCzConfig, defaultConfig) {
    const config = Object.assign(cloneDeep(defaults), cloneDeep(defaultConfig) || {});

    let czConfig = pathOrCzConfig || {};

    if (typeof pathOrCzConfig === 'string') {
        czConfig = CzConfig.get(pathOrCzConfig);
    }

    // Converts the `scopes` and `scopeOverrides` into `scope-enum` rule.
    if (typeof czConfig.scopes !== 'undefined' || typeof czConfig.scopeOverrides !== 'undefined') {
        config.rules['scope-enum'][2] = Scopes.get(czConfig);
    }

    // Removes empty `scope-enum` rule.
    if (!config.rules['scope-enum'][2].length) {
        delete config.rules['scope-enum'];
    }

    // Converts the `types` into `type-enum` rule.
    if (typeof czConfig.types !== 'undefined') {
        config.rules['type-enum'][2] = Types.get(czConfig);
    }

    // Removes empty `type-enum` rule.
    if (!config.rules['type-enum'][2].length) {
        delete config.rules['type-enum'];
    }

    return config;
}

module.exports          = () => get(CzConfig());
module.exports.defaults = defaults;
module.exports.get      = get;
