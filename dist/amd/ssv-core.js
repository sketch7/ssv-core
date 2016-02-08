define("collection.svc", ["require", "exports", "lodash"], function (require, exports, _) {
    "use strict";
    var CollectionService = (function () {
        function CollectionService() {
        }
        /**
         * Unselect all collection items and select only the item specified.
         * @param {ISelectable[]} collection collection to unselect.
         * @param {ISelectable} selectItem item to select.
         */
        CollectionService.prototype.mutualExclusiveSelect = function (collection, selectItem) {
            _.forEach(collection, function (x) {
                x.isSelected = false;
            });
            selectItem.isSelected = true;
        };
        return CollectionService;
    }());
    exports.CollectionService = CollectionService;
});
define("enum.svc", ["require", "exports", "lodash"], function (require, exports, _) {
    "use strict";
    var EnumService = (function () {
        function EnumService() {
        }
        /**
         * Gets all names of the enum as an array.
         * @param {any} e enum to get data of.
         * @returns enum definition names as a string array e.g. ["Elite", "Boss", "Normal", "RaidBoss"].
         */
        EnumService.prototype.getNames = function (e) {
            return Object.keys(e).filter(function (v) { return isNaN(parseInt(v, 10)); });
        };
        /**
         * Gets all names of the enum as an array with values kebab'ed cased characters e.g. "raid-boss"
         * @param {any} e enum to get data of.
         * @returns enum definition names as a string array with kebab case e.g. ["elite", "boss", "normal", "raid-boss"].
         */
        EnumService.prototype.getNamesKebab = function (e) {
            return Object.keys(e).map(function (v) { return _.kebabCase(v); }).filter(function (v) { return isNaN(parseInt(v, 10)); });
        };
        /**
         * Gets all values of the enum as an array.
         * @param {any} e enum to get data of.
         * @returns enum values as number array e.g. [1, 2, 3, 4]
         */
        EnumService.prototype.getValues = function (e) {
            return Object.keys(e).map(function (v) { return parseInt(v, 10); }).filter(function (v) { return !isNaN(v); });
        };
        return EnumService;
    }());
    exports.EnumService = EnumService;
});
define("keycode", ["require", "exports"], function (require, exports) {
    "use strict";
});
define("math.svc", ["require", "exports"], function (require, exports) {
    "use strict";
    var MathService = (function () {
        function MathService() {
        }
        MathService.prototype.add = function (value, valueB) {
            return value + valueB;
        };
        return MathService;
    }());
    exports.MathService = MathService;
});
define("string.svc", ["require", "exports"], function (require, exports) {
    "use strict";
    var StringService = (function () {
        function StringService() {
        }
        StringService.prototype.interpolate = function (value, data, interpolatePrefix) {
            if (interpolatePrefix === void 0) { interpolatePrefix = ":"; }
            data = data || {};
            var interpolatedUrl = value.replace(/(\(\s*|\s*\)|\s*\|\s*)/g, "");
            for (var property in data) {
                if (data.hasOwnProperty(property)) {
                    interpolatedUrl = interpolatedUrl.replace("" + interpolatePrefix + property, data[property]);
                }
            }
            return interpolatedUrl;
        };
        return StringService;
    }());
    exports.StringService = StringService;
});
define("utils.svc", ["require", "exports", "math.svc", "string.svc", "collection.svc", "enum.svc"], function (require, exports, math_svc_1, string_svc_1, collection_svc_1, enum_svc_1) {
    "use strict";
    var Utils = (function () {
        function Utils() {
            this.math = new math_svc_1.MathService();
            this.string = new string_svc_1.StringService();
            this.collection = new collection_svc_1.CollectionService();
            this.enum = new enum_svc_1.EnumService();
        }
        return Utils;
    }());
    exports.Utils = Utils;
    exports.utils = new Utils();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = exports.utils;
});
define("ssv-core", ["require", "exports", "collection.svc", "enum.svc", "keycode", "math.svc", "string.svc", "utils.svc"], function (require, exports, collection_svc_2, enum_svc_2, keycode_1, math_svc_2, string_svc_2, utils_svc_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    __export(collection_svc_2);
    __export(enum_svc_2);
    __export(keycode_1);
    __export(math_svc_2);
    __export(string_svc_2);
    __export(utils_svc_1);
});

//# sourceMappingURL=ssv-core.js.map
