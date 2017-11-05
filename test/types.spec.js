const assert = require('power-assert');
const Types  = require('../lib/types');

describe('types', function () {
    describe('.get()', function () {
        it('should return the default types if `types` does not exist in given config', function () {
            assert.deepStrictEqual(Types.get({}), Types.defaults);
        });

        it('should return the types in given config', function () {
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

            assert.deepStrictEqual(Types.get(config), ['type-1', 'type-2']);
        });
    });
});
