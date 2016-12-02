'use strict';

const czConfig = require('./cz-config')();

const defaults = [
    'feat',
    'fix',
    'docs',
    'style',
    'refactor',
    'perf',
    'test',
    'chore',
    'revert',
];

function get(config) {
    const types = [];

    if (typeof config.types === 'undefined') {
        return defaults;
    }

    for (const type of config.types) {
        types.push(type.value);
    }

    return types;
}

module.exports          = () => get(czConfig);
module.exports.defaults = defaults;
module.exports.get      = get;
