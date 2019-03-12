export enum TimeUnits {
	Milliseconds,
	Seconds,
	Minutes,
	Hours,
	Days
}

export const MILLIS_PER_SECOND = 1000;
export const SECONDS_PER_MINUTE = 60;
export const MINUTES_PER_HOUR = 60;
export const HOURS_PER_DAY = 24;

export const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;
export const SECONDS_PER_DAY = MINUTES_PER_DAY * SECONDS_PER_MINUTE;
export const MILLIS_PER_MINUTE = MILLIS_PER_SECOND * SECONDS_PER_MINUTE;
export const MILLIS_PER_DAY = MILLIS_PER_MINUTE * MINUTES_PER_DAY;

/**
 * Converts from milliseconds to seconds e.g. 2500 (ms) => 2.5 (s)
 * @param milliseconds value to convert e.g. 2500
 * @returns time in seconds
 */
export function fromMillisecondsToSeconds(milliseconds: number): number {
	return milliseconds / MILLIS_PER_SECOND;
}

/**
 * Converts from milliseconds to minutes e.g. 72000 (ms) => 1.2 (m)
 * @param milliseconds value to convert e.g. 72000
 * @returns time in minutes
 */
export function fromMillisecondsToMinutes(milliseconds: number): number {
	return milliseconds / MILLIS_PER_MINUTE;
}

/**
 * Converts from seconds to milliseconds e.g. 2.5 (s) => 2500 (ms)
 * @param seconds value to convert e.g. 2.5
 * @returns time in milliseconds
 */
export function fromSecondsToMilliseconds(seconds: number): number {
	return seconds * MILLIS_PER_SECOND;
}

/**
 * Converts from seconds to minutes e.g. 120 (s) => 2 (m)
 * @param seconds value to convert e.g. 120
 * @returns time in minutes
 */
export function fromSecondsToMinutes(seconds: number): number {
	return seconds / SECONDS_PER_MINUTE;
}

/**
 * Converts from minutes to milliseconds e.g. 2 (m) => 120000 (m)
 * @param seconds value to convert e.g. 2
 * @returns time in milliseconds
 */
export function fromMinutesToMilliseconds(minutes: number): number {
	return minutes * MILLIS_PER_MINUTE;
}

/**
 * Converts from minutes to seconds e.g. 2 (m) => 120 (s)
 * @param seconds value to convert e.g. 2
 * @returns time in seconds
 */
export function fromMinutesToSeconds(minutes: number): number {
	return minutes * SECONDS_PER_MINUTE;
}

/**
 * Converts time from specified time unit to an other time unit.
 *
 * @param value value to convert e.g. 2
 * @param fromUnit units to convert time from
 * @param toUnit units to convert time to
 * @returns time in specified units
 */
export function convertTime(value: number, fromUnit: TimeUnits, toUnit: TimeUnits): number {
	switch (fromUnit) {
		case TimeUnits.Milliseconds:
			return fromMillisecondsTo(value, toUnit);
		case TimeUnits.Seconds:
			return fromSecondsTo(value, toUnit);
		case TimeUnits.Minutes:
			return fromMinutesTo(value, toUnit);
		case TimeUnits.Hours:
			return fromHoursTo(value, toUnit);
		case TimeUnits.Days:
			return fromDaysTo(value, toUnit);
		default:
			throw Error(`convertTime fromUnit '${TimeUnits[fromUnit]}' unsupported`);
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
			return value;
		case TimeUnits.Hours:
			return value / MINUTES_PER_HOUR / MILLIS_PER_MINUTE;
		case TimeUnits.Days:
			return value / MILLIS_PER_DAY;
		default:
			throw Error(`convertTime toUnit '${TimeUnits[toUnit]}' unsupported`);
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
			throw Error(`convertTime toUnit '${TimeUnits[toUnit]}' unsupported`);
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
		case TimeUnits.Hours:
			return value / MINUTES_PER_HOUR;
		case TimeUnits.Days:
			return value / MINUTES_PER_DAY;
		default:
			throw Error(`convertTime toUnit '${TimeUnits[toUnit]}' unsupported`);
	}
}

export function fromHoursTo(value: number, toUnit: TimeUnits): number {
	switch (toUnit) {
		case TimeUnits.Milliseconds:
			return value * MINUTES_PER_HOUR * MILLIS_PER_MINUTE;
		case TimeUnits.Seconds:
			return value * MINUTES_PER_HOUR * SECONDS_PER_MINUTE;
		case TimeUnits.Minutes:
			return value * MINUTES_PER_HOUR;
		case TimeUnits.Hours:
			return value;
		case TimeUnits.Days:
			return value / HOURS_PER_DAY;
		default:
			throw Error(`convertTime toUnit '${TimeUnits[toUnit]}' unsupported`);
	}
}

export function fromDaysTo(value: number, toUnit: TimeUnits): number {
	switch (toUnit) {
		case TimeUnits.Milliseconds:
			return value * MILLIS_PER_DAY;
		case TimeUnits.Seconds:
			return value * SECONDS_PER_DAY;
		case TimeUnits.Minutes:
			return value * MINUTES_PER_DAY;
		case TimeUnits.Hours:
			return value * HOURS_PER_DAY;
		case TimeUnits.Days:
			return value;
		default:
			throw Error(`convertTime toUnit '${TimeUnits[toUnit]}' unsupported`);
	}
}