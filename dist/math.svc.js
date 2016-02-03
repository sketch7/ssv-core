define(["require", "exports"], function (require, exports) {
    var MathService = (function () {
        function MathService() {
        }
        MathService.prototype.add = function (value, valueB) {
            return value + valueB;
        };
        return MathService;
    })();
    exports.MathService = MathService;
});

//# sourceMappingURL=math.svc.js.map
