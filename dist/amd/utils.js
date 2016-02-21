define(["require", "exports", "./math", "./string", "./collection", "./enum"], function (require, exports, math_1, string_1, collection_1, enum_1) {
    var Utils = (function () {
        function Utils() {
            this.math = new math_1.MathService();
            this.string = new string_1.StringService();
            this.collection = new collection_1.CollectionService();
            this.enum = new enum_1.EnumService();
        }
        return Utils;
    })();
    exports.Utils = Utils;
    exports.utils = new Utils();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = exports.utils;
});

//# sourceMappingURL=utils.js.map
