'use strict';

const types  = require('./lib/types');
const scopes = require('./lib/scopes');

module.exports = {
    rules    : {
        'body-leading-blank'  : [
            2,
            'always',
        ],
        'body-max-length'     : [
            1,
            'always',
            Infinity,
        ],
        'body-min-length'     : [
            1,
            'always',
            0,
        ],
        'body-tense'          : [
            1,
            'always',
            [
                'present-imperative',
            ],
        ],
        'footer-leading-blank': [
            2,
            'always',
        ],
        'footer-max-length'   : [
            1,
            'always',
            Infinity,
        ],
        'footer-min-length'   : [
            1,
            'always',
            0,
        ],
        'footer-tense'        : [
            1,
            'always',
            [
                'present-imperative',
            ],
        ],
        'header-max-length'   : [
            1,
            'always',
            72,
        ],
        'header-min-length'   : [
            1,
            'always',
            0,
        ],
        'lang'                : [
            1,
            'always',
            'eng',
        ],
        'scope-enum'          : [
            2,
            'always',
            scopes(),
        ],
        'scope-case'          : [
            2,
            'always',
            'lowerCase',
        ],
        'scope-empty'         : [
            1,
            'never',
        ],
        'scope-max-length'    : [
            1,
            'always',
            Infinity,
        ],
        'scope-min-length'    : [
            1,
            'always',
            0,
        ],
        'subject-case'        : [
            2,
            'always',
            'lowerCase',
        ],
        'subject-empty'       : [
            2,
            'never',
        ],
        'subject-full-stop'   : [
            2,
            'never',
        ],
        'subject-max-length'  : [
            1,
            'always',
            Infinity,
        ],
        'subject-min-length'  : [
            1,
            'always',
            0,
        ],
        'subject-tense'       : [
            2,
            'always',
            [
                'present-imperative',
            ],
        ],
        'type-enum'           : [
            2,
            'always',
            types(),
        ],
        'type-case'           : [
            2,
            'always',
            'lowerCase',
        ],
        'type-empty'          : [
            2,
            'never',
        ],
        'type-max-length'     : [
            1,
            'always',
            Infinity,
        ],
        'type-min-length'     : [
            1,
            'always',
            0,
        ],
    }
};
