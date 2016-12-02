'use strict';

const czConfig = require('./cz-config')();

function get(config) {
    const scopes = [];

    if (typeof config.scopes === 'undefined') {
        return scopes;
    }

    for (const scope of config.scopes) {
        scopes.push(scope.name);
    }

    if (typeof config.scopeOverrides) {
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

module.exports     = () => get(czConfig);
module.exports.get = get;
