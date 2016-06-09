define(["require", "exports"], function (require, exports) {
    "use strict";
    (function (TimeUnits) {
        TimeUnits[TimeUnits["Milliseconds"] = 0] = "Milliseconds";
        TimeUnits[TimeUnits["Seconds"] = 1] = "Seconds";
        TimeUnits[TimeUnits["Minutes"] = 2] = "Minutes";
    })(exports.TimeUnits || (exports.TimeUnits = {}));
    var TimeUnits = exports.TimeUnits;
    /**
     * Conversion utilities.
     * @class ConversionExtensions
     */
    var ConversionExtensions = (function () {
        function ConversionExtensions() {
            this.MILLIS_PER_SECOND = 1000;
            this.SECONDS_PER_MINUTE = 60;
            this.MILLIS_PER_MINUTE = this.MILLIS_PER_SECOND * this.SECONDS_PER_MINUTE;
        }
        /**
         * Converts from milliseconds to seconds e.g. 2500 (ms) => 2.5 (s)
         * @param {number} milliseconds value to convert e.g. 2500
         * @returns {number} time in seconds
         */
        ConversionExtensions.prototype.fromMillisecondsToSeconds = function (milliseconds) {
            return milliseconds / this.MILLIS_PER_SECOND;
        };
        /**
         * Converts from milliseconds to minutes e.g. 72000 (ms) => 1.2 (m)
         * @param {number} milliseconds value to convert e.g. 72000
         * @returns {number} time in minutes
         */
        ConversionExtensions.prototype.fromMillisecondsToMinutes = function (milliseconds) {
            return milliseconds / this.MILLIS_PER_MINUTE;
        };
        /**
         * Converts from seconds to milliseconds e.g. 2.5 (s) => 2500 (ms)
         * @param {number} seconds value to convert e.g. 2.5
         * @returns {number} time in milliseconds
         */
        ConversionExtensions.prototype.fromSecondsToMilliseconds = function (seconds) {
            return seconds * this.MILLIS_PER_SECOND;
        };
        /**
         * Converts from seconds to minutes e.g. 120 (s) => 2 (m)
         * @param {number} seconds value to convert e.g. 120
         * @returns {number} time in minutes
         */
        ConversionExtensions.prototype.fromSecondsToMinutes = function (seconds) {
            return seconds / this.SECONDS_PER_MINUTE;
        };
        /**
         * Converts from minutes to milliseconds e.g. 2 (m) => 120000 (m)
         * @param {number} seconds value to convert e.g. 2
         * @returns {number} time in milliseconds
         */
        ConversionExtensions.prototype.fromMinutesToMilliseconds = function (minutes) {
            return minutes * this.MILLIS_PER_MINUTE;
        };
        /**
         * Converts from minutes to seconds e.g. 2 (m) => 120 (s)
         * @param {number} seconds value to convert e.g. 2
         * @returns {number} time in seconds
         */
        ConversionExtensions.prototype.fromMinutesToSeconds = function (minutes) {
            return minutes * this.SECONDS_PER_MINUTE;
        };
        /**
         * Converts time from specified time unit to an other time unit.
         *
         * @param {number} value value to convert e.g. 2
         * @param {TimeUnits} fromUnit units to convert time from
         * @param {TimeUnits} toUnit units to convert time to
         * @returns {number} time in specified units
         */
        ConversionExtensions.prototype.convertTime = function (value, fromUnit, toUnit) {
            switch (fromUnit) {
                case TimeUnits.Milliseconds:
                    return this.fromMillisecondsTo(value, toUnit);
                case TimeUnits.Seconds:
                    return this.fromSecondsTo(value, toUnit);
                case TimeUnits.Minutes:
                    return this.fromMinutesTo(value, toUnit);
                default:
                    throw Error("convertTime of invalid fromUnit '" + fromUnit + "' ");
            }
        };
        ConversionExtensions.prototype.fromMillisecondsTo = function (value, toUnit) {
            switch (toUnit) {
                case TimeUnits.Milliseconds:
                    return value;
                case TimeUnits.Seconds:
                    return this.fromMillisecondsToSeconds(value);
                case TimeUnits.Minutes:
                    return this.fromMillisecondsToMinutes(value);
                default:
                    throw Error("convertTime of invalid toUnit '" + toUnit + "' ");
            }
        };
        ConversionExtensions.prototype.fromSecondsTo = function (value, toUnit) {
            switch (toUnit) {
                case TimeUnits.Milliseconds:
                    return this.fromSecondsToMilliseconds(value);
                case TimeUnits.Seconds:
                    return value;
                case TimeUnits.Minutes:
                    return this.fromSecondsToMinutes(value);
                default:
                    throw Error("convertTime of invalid toUnit '" + toUnit + "' ");
            }
        };
        ConversionExtensions.prototype.fromMinutesTo = function (value, toUnit) {
            switch (toUnit) {
                case TimeUnits.Milliseconds:
                    return this.fromMinutesToMilliseconds(value);
                case TimeUnits.Seconds:
                    return this.fromMinutesToSeconds(value);
                case TimeUnits.Minutes:
                    return value;
                default:
                    throw Error("convertTime of invalid toUnit '" + toUnit + "' ");
            }
        };
        return ConversionExtensions;
    }());
    exports.ConversionExtensions = ConversionExtensions;
});

//# sourceMappingURL=conversion.js.map
