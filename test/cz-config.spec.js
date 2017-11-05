const assert   = require('power-assert');
const path     = require('path');
const CzConfig = require('../lib/cz-config');

describe('cz-config', function () {
    describe('.get()', function () {
        it('should return an empty object when non-existent config path is given', function () {
            assert.deepStrictEqual(CzConfig.get(), {});
        });

        it('should return an object that is loaded from the specified config file', function () {
            const configPath = path.join(__dirname, 'fixtures/.cz-config.js');

            const expected = {
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

            assert.deepStrictEqual(CzConfig.get(configPath), expected);
        });
    });
});
