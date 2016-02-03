define(["require", "exports", "./string.svc", "./math.svc", "./enum.svc", "./collection.svc"], function (require, exports, string_svc_1, math_svc_1, enum_svc_1, collection_svc_1) {
    var Utils = (function () {
        function Utils() {
            this.string = new string_svc_1.StringService();
            this.math = new math_svc_1.MathService();
            this.enums = new enum_svc_1.EnumService();
            this.collection = new collection_svc_1.CollectionService();
        }
        return Utils;
    })();
    exports.Utils = Utils;
    exports.utils = new Utils();
});

//# sourceMappingURL=index.js.map
