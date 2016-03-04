export enum TimeUnits {
	Milliseconds,
	Seconds,
	Minutes
}

/**
 * Conversion utilities.
 * @class ConversionExtensions
 */
export class ConversionExtensions {

	MILLIS_PER_SECOND = 1000;
	SECONDS_PER_MINUTE = 60;
	MILLIS_PER_MINUTE = this.MILLIS_PER_SECOND * this.SECONDS_PER_MINUTE;


	/**
	 * Converts from milliseconds to seconds e.g. 2500 (ms) => 2.5 (s)
	 * @param {number} milliseconds value to convert e.g. 2500
	 * @returns {number} time in seconds
	 */
	fromMillisecondsToSeconds(milliseconds: number): number {
		return milliseconds / this.MILLIS_PER_SECOND;
	}

	/**
	 * Converts from milliseconds to minutes e.g. 72000 (ms) => 1.2 (m)
	 * @param {number} milliseconds value to convert e.g. 72000
	 * @returns {number} time in minutes
	 */
	fromMillisecondsToMinutes(milliseconds: number): number {
		return milliseconds / this.MILLIS_PER_MINUTE;
	}

	/**
	 * Converts from seconds to milliseconds e.g. 2.5 (s) => 2500 (ms)
	 * @param {number} seconds value to convert e.g. 2.5
	 * @returns {number} time in milliseconds
	 */
	fromSecondsToMilliseconds(seconds: number): number {
		return seconds * this.MILLIS_PER_SECOND;
	}

	/**
	 * Converts from seconds to minutes e.g. 120 (s) => 2 (m)
	 * @param {number} seconds value to convert e.g. 120
	 * @returns {number} time in minutes
	 */
	fromSecondsToMinutes(seconds: number): number {
		return seconds / this.SECONDS_PER_MINUTE;
	}

	/**
	 * Converts from minutes to milliseconds e.g. 2 (m) => 120000 (m)
	 * @param {number} seconds value to convert e.g. 2
	 * @returns {number} time in milliseconds
	 */
	fromMinutesToMilliseconds(minutes: number): number {
		return minutes * this.MILLIS_PER_MINUTE;
	}

	/**
	 * Converts from minutes to seconds e.g. 2 (m) => 120 (s)
	 * @param {number} seconds value to convert e.g. 2
	 * @returns {number} time in seconds
	 */
	fromMinutesToSeconds(minutes: number): number {
		return minutes * this.SECONDS_PER_MINUTE;
	}


	/**
	 * Converts time from specified time unit to an other time unit.
	 * 
	 * @param {number} value value to convert e.g. 2
	 * @param {TimeUnits} fromUnit units to convert time from
	 * @param {TimeUnits} toUnit units to convert time to
	 * @returns {number} time in specified units
	 */
	convertTime(value: number, fromUnit: TimeUnits, toUnit: TimeUnits): number {

		switch (fromUnit) {
			case TimeUnits.Milliseconds:

				switch (toUnit) {
					case TimeUnits.Milliseconds:
						return value;
					case TimeUnits.Seconds:
						return this.fromMillisecondsToSeconds(value);
					case TimeUnits.Minutes:
						return this.fromMillisecondsToMinutes(value);
					default:
						throw Error(`convertTime of invalid toUnit '${toUnit}' `);
				}

			case TimeUnits.Seconds:

				switch (toUnit) {
					case TimeUnits.Milliseconds:
						return this.fromSecondsToMilliseconds(value);
					case TimeUnits.Seconds:
						return value;
					case TimeUnits.Minutes:
						return this.fromSecondsToMinutes(value);
					default:
						throw Error(`convertTime of invalid toUnit '${toUnit}' `);
				}

			case TimeUnits.Minutes:

				switch (toUnit) {
					case TimeUnits.Milliseconds:
						return this.fromMinutesToMilliseconds(value);
					case TimeUnits.Seconds:
						return this.fromMinutesToSeconds(value);
					case TimeUnits.Minutes:
						return value;
					default:
						throw Error(`convertTime of invalid toUnit '${toUnit}' `);
				}
			default:
				throw Error(`convertTime of invalid fromUnit '${fromUnit}' `);

		}

	}

}