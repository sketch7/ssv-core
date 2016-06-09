define(["require", "exports"], function (require, exports) {
    "use strict";
    var StringExtensions = (function () {
        function StringExtensions() {
            /**
             * parseBool configuration to add/remove possible values.
             *
             * @type {Dictionary<boolean>}
             */
            this.parseBoolConfig = {
                // truthy
                "true": true,
                "1": true,
                "yes": true,
                "y": true,
                "on": true,
                // falsy
                "false": false,
                "0": false,
                "no": false,
                "n": false,
                "off": false
            };
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
        /**
         * Parses a value to boolean "humanized", which can also be configured in order to add additional values. e.g.
         * true => "true", "1", "yes", "y", "on"
         * false => "false", "0", "no", "n", "off"
         * @param {string} value string value to parse
         * @returns {boolean} true or false
         */
        StringExtensions.prototype.parseBool = function (value) {
            return this.parseBoolConfig[(String(value).toLowerCase())];
        };
        /**
         * Replaces all occurrences with a string with the specified value.
         *
         * @param {string} value value to search within
         * @param {string} search value to search for e.g. "//"
         * @param {string} replacement value to replace with e.g. "/"
         * @returns {string} Returns string with the replaced values
         */
        StringExtensions.prototype.replaceAll = function (value, search, replacement) {
            return value.replace(new RegExp(search, "g"), replacement);
        };
        ;
        return StringExtensions;
    }());
    exports.StringExtensions = StringExtensions;
});

//# sourceMappingURL=string.js.map
