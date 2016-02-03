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
define("string.svc", ["require", "exports"], function (require, exports) {
    "use strict";
    var StringService = (function () {
        function StringService() {
        }
        StringService.prototype.interpolateUrl = function (url, data) {
            data = data || {};
            var interpolatedUrl = url.replace(/(\(\s*|\s*\)|\s*\|\s*)/g, "");
            for (var property in data) {
                if (data.hasOwnProperty(property)) {
                    interpolatedUrl = interpolatedUrl.replace(":" + property, data[property]);
                }
            }
            return interpolatedUrl;
        };
        return StringService;
    }());
    exports.StringService = StringService;
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
define("index", ["require", "exports", "string.svc", "math.svc", "enum.svc", "collection.svc"], function (require, exports, string_svc_1, math_svc_1, enum_svc_1, collection_svc_1) {
    "use strict";
    var Utils = (function () {
        function Utils() {
            this.string = new string_svc_1.StringService();
            this.math = new math_svc_1.MathService();
            this.enums = new enum_svc_1.EnumService();
            this.collection = new collection_svc_1.CollectionService();
        }
        return Utils;
    }());
    exports.Utils = Utils;
    exports.utils = new Utils();
});

//# sourceMappingURL=ssv-core.js.map
