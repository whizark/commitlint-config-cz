'use strict';

const czConfig = require('./cz-config')();

const defaults = [];

function get(config) {
    const scopes = [];

    if (typeof config.scopes === 'undefined') {
        return defaults;
    }

    for (const scope of config.scopes) {
        scopes.push(scope.name);
    }

    if (typeof config.scopeOverrides === 'undefined') {
        return scopes;
    }

    for (const type of Object.keys(config.scopeOverrides)) {
        for (const scope of config.scopeOverrides[type]) {
            scopes.push(scope.name);
        }
    }

    return scopes.filter(function (value, index, scope) {
        return scope.indexOf(value) === index;
    });
}

module.exports          = () => get(czConfig);
module.exports.defaults = defaults;
module.exports.get      = get;
