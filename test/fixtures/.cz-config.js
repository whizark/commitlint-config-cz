'use strict';

module.exports = {
    types: [
        {
            value: 'type-1',
            name : 'type-1: Description',
        },
        {
            value: 'type-2',
            name : 'type-2: Description',
        },
    ],

    scopes: [
        {name: 'scope-1'},
        {name: 'scope-2'},
    ],

    scopeOverrides: {
        'type-1': [
            {name: 'scope-3'},
        ],
    },
};
