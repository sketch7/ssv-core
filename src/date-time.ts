export enum TimeUnits {
	Milliseconds,
	Seconds,
	Minutes
}

export const MILLIS_PER_SECOND = 1000;
export const SECONDS_PER_MINUTE = 60;
export const MILLIS_PER_MINUTE = MILLIS_PER_SECOND * SECONDS_PER_MINUTE;

/**
 * Converts from milliseconds to seconds e.g. 2500 (ms) => 2.5 (s)
 * @param {number} milliseconds value to convert e.g. 2500
 * @returns {number} time in seconds
 */
export function fromMillisecondsToSeconds(milliseconds: number): number {
	return milliseconds / MILLIS_PER_SECOND;
}

/**
 * Converts from milliseconds to minutes e.g. 72000 (ms) => 1.2 (m)
 * @param {number} milliseconds value to convert e.g. 72000
 * @returns {number} time in minutes
 */
export function fromMillisecondsToMinutes(milliseconds: number): number {
	return milliseconds / MILLIS_PER_MINUTE;
}

/**
 * Converts from seconds to milliseconds e.g. 2.5 (s) => 2500 (ms)
 * @param {number} seconds value to convert e.g. 2.5
 * @returns {number} time in milliseconds
 */
export function fromSecondsToMilliseconds(seconds: number): number {
	return seconds * MILLIS_PER_SECOND;
}

/**
 * Converts from seconds to minutes e.g. 120 (s) => 2 (m)
 * @param {number} seconds value to convert e.g. 120
 * @returns {number} time in minutes
 */
export function fromSecondsToMinutes(seconds: number): number {
	return seconds / SECONDS_PER_MINUTE;
}

/**
 * Converts from minutes to milliseconds e.g. 2 (m) => 120000 (m)
 * @param {number} seconds value to convert e.g. 2
 * @returns {number} time in milliseconds
 */
export function fromMinutesToMilliseconds(minutes: number): number {
	return minutes * MILLIS_PER_MINUTE;
}

/**
 * Converts from minutes to seconds e.g. 2 (m) => 120 (s)
 * @param {number} seconds value to convert e.g. 2
 * @returns {number} time in seconds
 */
export function fromMinutesToSeconds(minutes: number): number {
	return minutes * SECONDS_PER_MINUTE;
}

/**
 * Converts time from specified time unit to an other time unit.
 *
 * @param {number} value value to convert e.g. 2
 * @param {TimeUnits} fromUnit units to convert time from
 * @param {TimeUnits} toUnit units to convert time to
 * @returns {number} time in specified units
 */
export function convertTime(value: number, fromUnit: TimeUnits, toUnit: TimeUnits): number {
	switch (fromUnit) {
		case TimeUnits.Milliseconds:
			return fromMillisecondsTo(value, toUnit);
		case TimeUnits.Seconds:
			return fromSecondsTo(value, toUnit);
		case TimeUnits.Minutes:
			return fromMinutesTo(value, toUnit);
		default:
			throw Error(`convertTime of invalid fromUnit '${fromUnit}'`);
	}
}

export function fromMillisecondsTo(value: number, toUnit: TimeUnits): number {
	switch (toUnit) {
		case TimeUnits.Milliseconds:
			return value;
		case TimeUnits.Seconds:
			return fromMillisecondsToSeconds(value);
		case TimeUnits.Minutes:
			return fromMillisecondsToMinutes(value);
		default:
			throw Error(`convertTime of invalid toUnit '${toUnit}'`);
	}
}

export function fromSecondsTo(value: number, toUnit: TimeUnits): number {
	switch (toUnit) {
		case TimeUnits.Milliseconds:
			return fromSecondsToMilliseconds(value);
		case TimeUnits.Seconds:
			return value;
		case TimeUnits.Minutes:
			return fromSecondsToMinutes(value);
		default:
			throw Error(`convertTime of invalid toUnit '${toUnit}'`);
	}
}

export function fromMinutesTo(value: number, toUnit: TimeUnits): number {
	switch (toUnit) {
		case TimeUnits.Milliseconds:
			return fromMinutesToMilliseconds(value);
		case TimeUnits.Seconds:
			return fromMinutesToSeconds(value);
		case TimeUnits.Minutes:
			return value;
		default:
			throw Error(`convertTime of invalid toUnit '${toUnit}'`);
	}
}