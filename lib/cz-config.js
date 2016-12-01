'use strict';

const root = require('app-root-path');
const path = require('path');
const fs   = require('fs');

const CZ_CONFIG_NAME = '.cz-config.js';

function czConfig() {
    const configPath = path.join(root.path, CZ_CONFIG_NAME);

    let config;

    try {
        fs.accessSync(configPath, fs.R_OK);

        config = require(configPath);
    } catch (err) {
        config = {};
    }

    return config;
}

module.exports = czConfig();
