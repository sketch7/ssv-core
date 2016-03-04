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

	fromMillisecondsToSeconds(milliseconds: number): number {
		return milliseconds / this.MILLIS_PER_SECOND;
	}

	fromMillisecondsToMinutes(milliseconds: number): number {
		return milliseconds / this.MILLIS_PER_MINUTE;
	}

	fromSecondsToMilliseconds(seconds: number): number {
		return seconds * this.MILLIS_PER_SECOND;
	}

	fromSecondsToMinutes(seconds: number): number {
		return seconds / this.SECONDS_PER_MINUTE;
	}

	fromMinutesToMilliseconds(minutes: number): number {
		return minutes * this.MILLIS_PER_MINUTE;
	}

	fromMinutesToSeconds(minutes: number): number {
		return minutes * this.SECONDS_PER_MINUTE;
	}

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