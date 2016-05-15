/**
 * Project: Object.stringify
 * Author: Marek Zeman
 * Twitter: MarekZeman91
 * Site: http://marekzeman.cz
 * License: MIT
 * Version: 1.0
 */
Object.stringify = (function () {
    function replacer(k, v) {
        return typeof v === 'function' ? v.toString() : v;
    }

    return function (obj, space) {
        return JSON.stringify(obj, replacer, space);
    }
})();
