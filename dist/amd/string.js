define(["require", "exports"], function (require, exports) {
    var StringExtensions = (function () {
        function StringExtensions() {
        }
        /**
         * Interpolates the string with the data specified by using the prefix (:) default as token.
         * e.g. 'api/:lang/games' => 'api/en/games'
         * @param {string} value string template to interpolate
         * @param {*} data data object to replace tokens
         * @param {string} [interpolatePrefix=":"] interpolation token prefix
         * @returns interpolated string
         */
        StringExtensions.prototype.interpolate = function (value, data, interpolatePrefix) {
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
        return StringExtensions;
    })();
    exports.StringExtensions = StringExtensions;
});

//# sourceMappingURL=string.js.map
