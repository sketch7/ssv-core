define(["require", "exports"], function (require, exports) {
    "use strict";
    var MathService = (function () {
        function MathService() {
        }
        // TODO: remove once finish testing.
        MathService.prototype.add = function (value, valueB) {
            return value + valueB;
        };
        return MathService;
    }());
    exports.MathService = MathService;
});

//# sourceMappingURL=math.js.map
