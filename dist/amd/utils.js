define(["require", "exports", "./collection", "./conversion", "./math", "./string", "./enum"], function (require, exports, collection_1, conversion_1, math_1, string_1, enum_1) {
    "use strict";
    var Utils = (function () {
        function Utils() {
            this.math = new math_1.MathExtensions();
            this.conversion = new conversion_1.ConversionExtensions();
            this.string = new string_1.StringExtensions();
            this.collection = new collection_1.CollectionExtensions();
            this.enum = new enum_1.EnumExtensions();
        }
        return Utils;
    }());
    exports.Utils = Utils;
    exports.utils = new Utils();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = exports.utils;
});

//# sourceMappingURL=utils.js.map
