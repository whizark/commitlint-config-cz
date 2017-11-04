'use strict';

const root = require('app-root-path');
const path = require('path');
const fs   = require('fs');

const CZ_CONFIG_NAME = '.cz-config.js';
const configPath     = path.join(root.path, CZ_CONFIG_NAME);

/**
 * Reads and gets the cz-customizable config from a path.
 *
 * @param {string} path The path to a cz-customizable config file.
 *
 * @returns {Object} The cz-customizable config.
 */
function get(path) {
    let config;

    try {
        fs.accessSync(path, fs.R_OK);

        config = require(path);
    } catch (err) {
        config = {};
    }

    return config;
}

module.exports     = () => get(configPath);
module.exports.get = get;
