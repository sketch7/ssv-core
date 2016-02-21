define(["require", "exports", "lodash"], function (require, exports, _) {
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

//# sourceMappingURL=enum.js.map
