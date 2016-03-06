export declare enum TimeUnits {
    Milliseconds = 0,
    Seconds = 1,
    Minutes = 2,
}
/**
 * Conversion utilities.
 * @class ConversionExtensions
 */
export declare class ConversionExtensions {
    MILLIS_PER_SECOND: number;
    SECONDS_PER_MINUTE: number;
    MILLIS_PER_MINUTE: number;
    /**
     * Converts from milliseconds to seconds e.g. 2500 (ms) => 2.5 (s)
     * @param {number} milliseconds value to convert e.g. 2500
     * @returns {number} time in seconds
     */
    fromMillisecondsToSeconds(milliseconds: number): number;
    /**
     * Converts from milliseconds to minutes e.g. 72000 (ms) => 1.2 (m)
     * @param {number} milliseconds value to convert e.g. 72000
     * @returns {number} time in minutes
     */
    fromMillisecondsToMinutes(milliseconds: number): number;
    /**
     * Converts from seconds to milliseconds e.g. 2.5 (s) => 2500 (ms)
     * @param {number} seconds value to convert e.g. 2.5
     * @returns {number} time in milliseconds
     */
    fromSecondsToMilliseconds(seconds: number): number;
    /**
     * Converts from seconds to minutes e.g. 120 (s) => 2 (m)
     * @param {number} seconds value to convert e.g. 120
     * @returns {number} time in minutes
     */
    fromSecondsToMinutes(seconds: number): number;
    /**
     * Converts from minutes to milliseconds e.g. 2 (m) => 120000 (m)
     * @param {number} seconds value to convert e.g. 2
     * @returns {number} time in milliseconds
     */
    fromMinutesToMilliseconds(minutes: number): number;
    /**
     * Converts from minutes to seconds e.g. 2 (m) => 120 (s)
     * @param {number} seconds value to convert e.g. 2
     * @returns {number} time in seconds
     */
    fromMinutesToSeconds(minutes: number): number;
    /**
     * Converts time from specified time unit to an other time unit.
     *
     * @param {number} value value to convert e.g. 2
     * @param {TimeUnits} fromUnit units to convert time from
     * @param {TimeUnits} toUnit units to convert time to
     * @returns {number} time in specified units
     */
    convertTime(value: number, fromUnit: TimeUnits, toUnit: TimeUnits): number;
    fromMillisecondsTo(value: number, toUnit: TimeUnits): number;
    fromSecondsTo(value: number, toUnit: TimeUnits): number;
    fromMinutesTo(value: number, toUnit: TimeUnits): number;
}
