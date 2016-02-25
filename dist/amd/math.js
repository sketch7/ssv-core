define(["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * Mathematics utilities and helpers.
     *
     * @export
     * @class MathExtensions
     */
    var MathExtensions = (function () {
        function MathExtensions() {
        }
        /**
         * Rounds numeric value to a specified precision (default 2) e.g. 20.556 => 20.57.
         * @param value amount to round e.g. 20.556
         * @param precision decimal places to round to e.g. 2 (default: 2)
         * @returns {number} rounded number
         */
        MathExtensions.prototype.round = function (value, precision) {
            if (precision === void 0) { precision = 2; }
            if (typeof value === "string") {
                return Number(parseFloat(value).toFixed(precision));
            }
            else {
                return Number(value.toFixed(precision));
            }
        };
        return MathExtensions;
    }());
    exports.MathExtensions = MathExtensions;
});

//# sourceMappingURL=math.js.map
