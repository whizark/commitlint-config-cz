const assert = require('power-assert');
const Scopes = require('../lib/scopes');

describe('scopes', function () {
    describe('.get()', function () {
        it('should return the default scopes if `scopes` does not exist in given config', function () {
            assert.deepStrictEqual(Scopes.get({}), Scopes.defaults);
        });

        it('should return the scopes in given config', function () {
            const config = {
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
            };

            assert.deepStrictEqual(Scopes.get(config), ['scope-1', 'scope-2']);
        });

        it('should merge `scopeOverrides` and return the scopes in given config', function () {
            const config = {
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

            assert.deepStrictEqual(Scopes.get(config), ['scope-1', 'scope-2', 'scope-3']);
        });

        it('should merge `scopeOverrides`, make each scope unique and return the scopes in given config', function () {
            const config = {
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
                    'type-2': [
                        {name: 'scope-3'},
                    ],
                },
            };

            assert.deepStrictEqual(Scopes.get(config), ['scope-1', 'scope-2', 'scope-3']);
        });
    });
});
