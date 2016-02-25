define(["require", "exports", "./math", "./string", "./collection", "./enum"], function (require, exports, math_1, string_1, collection_1, enum_1) {
    "use strict";
    var Utils = (function () {
        function Utils() {
            this.math = new math_1.MathExtensions();
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
