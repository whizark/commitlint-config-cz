const assert = require('power-assert');
const path   = require('path');
const Config = require('../lib/config');

describe('config', function () {
    describe('.get()', function () {
        it('should return an empty commitlint config object when non-existent config path is given', function () {
            assert.deepStrictEqual(Config.get(''), {rules: {}});
        });

        it('should return the commitlint config object that is converted from the specific cz-customizable config file',
            function () {
                const configPath = path.join(__dirname, 'fixtures/.cz-config.js');

                const expected = {
                    rules: {
                        'type-enum' : [
                            2,
                            'always',
                            [
                                'type-1',
                                'type-2',
                            ],
                        ],
                        'scope-enum': [
                            2,
                            'always',
                            [
                                'scope-1',
                                'scope-2',
                                'scope-3',
                            ],
                        ],
                    },
                };

                assert.deepStrictEqual(Config.get(configPath), expected);
            }
        );

        it('should remove empty `type-enum` rule',
            function () {
                const defaultConfig = {
                    rules: {
                        'type-enum' : [
                            2,
                            'always',
                            [],
                        ],
                        'scope-enum': [
                            2,
                            'always',
                            [
                                'scope-1',
                                'scope-2',
                                'scope-3',
                            ],
                        ],
                    },
                };

                const expected = {
                    rules: {
                        'scope-enum': [
                            2,
                            'always',
                            [
                                'scope-1',
                                'scope-2',
                                'scope-3',
                            ],
                        ],
                    }
                };

                assert.deepStrictEqual(Config.get({}, defaultConfig), expected);
            }
        );

        it('should remove empty `scope-enum` rule',
            function () {
                const defaultConfig = {
                    rules: {
                        'type-enum' : [
                            2,
                            'always',
                            [
                                'type-1',
                                'type-2',
                            ],
                        ],
                        'scope-enum': [
                            2,
                            'always',
                            [],
                        ],
                    },
                };

                const expected = {
                    rules: {
                        'type-enum': [
                            2,
                            'always',
                            [
                                'type-1',
                                'type-2',
                            ],
                        ],
                    }
                };

                assert.deepStrictEqual(Config.get({}, defaultConfig), expected);
            }
        );

        it('should merge cz-customizable config with default commitlint rule',
            function () {
                const configPath = path.join(__dirname, 'fixtures/.cz-config.js');

                const defaultConfig = {
                    rules: {
                        'body-leading-blank'  : [
                            2,
                            'always',
                        ],
                        'type-enum' : [
                            1,
                            'never',
                            [
                                'type-3',
                                'type-4',
                            ],
                        ],
                        'scope-enum': [
                            1,
                            'never',
                            [
                                'scope-4',
                                'scope-5',
                                'scope-6',
                            ],
                        ],
                    },
                };

                const expected = {
                    rules: {
                        'body-leading-blank'  : [
                            2,
                            'always',
                        ],
                        'type-enum' : [
                            1,
                            'never',
                            [
                                'type-1',
                                'type-2',
                            ],
                        ],
                        'scope-enum': [
                            1,
                            'never',
                            [
                                'scope-1',
                                'scope-2',
                                'scope-3',
                            ],
                        ],
                    }
                };

                assert.deepStrictEqual(Config.get(configPath, defaultConfig), expected);
            }
        );
    });
});
