/* jshint supernew: true */

'use strict';

var newObject, configModule;

/*** Create Empty Objects */
newObject = {};
newObject = Object.create(null);


/*** Object literal Module notation */
configModule = (function () {
    var _privConfig = {
            useCaching: true,
            language: 'es'
        },
        _errorRewritting = {
            code: 'undefined', msg: 'Couldn´t find config properties into new option'
        },
        _isObjConfig = function (newConfig) {
            return newConfig.hasOwnProperty('useCaching') &&
                newConfig.hasOwnProperty('language');
        };

    return {
        description: 'object module',
        properties: _privConfig,
        checkCaching: function () {
            console.log('Caching is ' + ( !!this.properties.useCaching ? 'enabled' : 'disabled' ));
        },
        rewriteConfig: function (opt) {
            opt = opt || {};
            try {
                if (!_isObjConfig(opt)) {
                    throw _errorRewritting;
                }
                this.properties = opt;

            } catch (e) {
                console.warn(e.code, e.msg);
            }
        }
    };
}());