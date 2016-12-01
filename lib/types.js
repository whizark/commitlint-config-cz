'use strict';

const czConfig = require('./cz-config');

function get(config) {
    const defaultTypes = [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'test',
        'chore',
        'revert',
    ];

    const types = [];

    if (typeof config.types === 'undefined') {
        return defaultTypes;
    }

    for (const type of config.types) {
        types.push(type.value);
    }

    return types;
}

module.exports     = () => get(czConfig);
module.exports.get = get;
