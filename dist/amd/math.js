define(["require", "exports"], function (require, exports) {
    var MathExtensions = (function () {
        function MathExtensions() {
        }
        // TODO: remove once finish testing.
        MathExtensions.prototype.add = function (value, valueB) {
            return value + valueB;
        };
        return MathExtensions;
    })();
    exports.MathExtensions = MathExtensions;
});

//# sourceMappingURL=math.js.map
