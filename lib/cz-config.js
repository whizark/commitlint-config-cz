'use strict';

const root = require('app-root-path');
const path = require('path');
const fs = require('fs');

const CZ_CONFIG_NAME = '.cz-config.js';
let czConfigPath = path.join(root.path, CZ_CONFIG_NAME);

const { config } = require(root.path, 'package.json'));
if (config && config['cz-customizable']) {
    const file = config['cz-customizable'].config;
    czConfigPath = path.join(root.path, file);
}

/**
 * Reads and gets the cz-customizable config from a path.
 *
 * @param {string} path The path to a cz-customizable config file.
 *
 * @returns {Object} The cz-customizable config.
 */
function get(path) {
    let czConfig;

    try {
        fs.accessSync(path, fs.R_OK);

        czConfig = require(path);
    } catch (err) {
        czConfig = {};
    }

    return czConfig;
}

module.exports = () => get(czConfigPath);
module.exports.get = get;
