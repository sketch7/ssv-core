define(["require", "exports"], function (require, exports) {
    "use strict";
    var StringService = (function () {
        function StringService() {
        }
        StringService.prototype.interpolate = function (value, data, interpolatePrefix) {
            if (interpolatePrefix === void 0) { interpolatePrefix = ":"; }
            data = data || {};
            var interpolatedValue = value.replace(/(\(\s*|\s*\)|\s*\|\s*)/g, "");
            for (var property in data) {
                if (data.hasOwnProperty(property)) {
                    interpolatedValue = interpolatedValue.replace("" + interpolatePrefix + property, data[property]);
                }
            }
            return interpolatedValue;
        };
        return StringService;
    }());
    exports.StringService = StringService;
});

//# sourceMappingURL=string.js.map
