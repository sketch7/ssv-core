import * as SUT from "./date-time";
import { TimeUnits } from "./date-time";

describe("DateTime Utils", () => {

	describe("fromMillisecondsToSecondsSpecs", () => {

		describe("given time in milliseconds", () => {
			it("should be converted to seconds", () => {
				const result = SUT.fromMillisecondsToSeconds(21000);
				expect(result).toBe(21);
			});
		});

	});

	describe("fromMillisecondsToMinutesSpecs", () => {

		describe("given time in milliseconds", () => {
			it("should be converted to minutes", () => {
				const result = SUT.fromMillisecondsToMinutes(75000);
				expect(result).toBe(1.25);
			});
		});

	});

	describe("fromSecondsToMillisecondsSpecs", () => {

		describe("given time in seconds", () => {
			it("should be converted to milliseconds", () => {
				const result = SUT.fromSecondsToMilliseconds(2.5);
				expect(result).toBe(2500);
			});
		});

	});

	describe("fromSecondsToMinutesSpecs", () => {

		describe("given time in seconds", () => {
			it("should be converted to minutes", () => {
				const result = SUT.fromSecondsToMinutes(75);
				expect(result).toBe(1.25);
			});
		});

	});

	describe("fromMinutesToMillisecondsSpecs", () => {

		describe("given time in minutes", () => {
			it("should be converted to milliseconds", () => {
				const result = SUT.fromMinutesToMilliseconds(2.5);
				expect(result).toBe(150000);
			});
		});

	});

	describe("fromMinutesToSecondsSpecs", () => {

		describe("given time in minutes", () => {
			it("should be converted to seconds", () => {
				const result = SUT.fromMinutesToSeconds(1.25);
				expect(result).toBe(75);
			});
		});

	});

	describe("convertTimeSpecs", () => {

		describe("given time in milliseconds", () => {
			it("should be converted to seconds", () => {
				const result = SUT.convertTime(3000, TimeUnits.Milliseconds, TimeUnits.Seconds);
				expect(result).toBe(3);
			});

			it("should be converted to minutes", () => {
				const result = SUT.convertTime(72000, TimeUnits.Milliseconds, TimeUnits.Minutes);
				expect(result).toBe(1.2);
			});

			it("should be converted to hours", () => {
				const result = SUT.convertTime(3.6e+6, TimeUnits.Milliseconds, TimeUnits.Hours);
				expect(result).toBe(1);
			});

			it("should be converted to days", () => {
				const result = SUT.convertTime(8.64e+7, TimeUnits.Milliseconds, TimeUnits.Days);
				expect(result).toBe(1);
			});
		});

		describe("given time in seconds", () => {
			it("should be converted to milliseconds", () => {
				const result = SUT.convertTime(3, TimeUnits.Seconds, TimeUnits.Milliseconds);
				expect(result).toBe(3000);
			});

			it("should be converted to minutes", () => {
				const result = SUT.convertTime(120, TimeUnits.Seconds, TimeUnits.Minutes);
				expect(result).toBe(2);
			});
		});

		describe("given time in minutes", () => {
			it("should be converted to milliseconds", () => {
				const result = SUT.convertTime(1.2, TimeUnits.Minutes, TimeUnits.Milliseconds);
				expect(result).toBe(72000);
			});

			it("should be converted to seconds", () => {
				const result = SUT.convertTime(1.25, TimeUnits.Minutes, TimeUnits.Seconds);
				expect(result).toBe(75);
			});
		});

		describe("given time in hours", () => {
			it("should be converted to milliseconds", () => {
				const result = SUT.convertTime(1, TimeUnits.Hours, TimeUnits.Milliseconds);
				expect(result).toBe(3.6e+6);
			});

			it("should be converted to seconds", () => {
				const result = SUT.convertTime(1, TimeUnits.Hours, TimeUnits.Seconds);
				expect(result).toBe(3600);
			});
		});

		describe("given time in days", () => {
			it("should be converted to milliseconds", () => {
				const result = SUT.convertTime(1, TimeUnits.Days, TimeUnits.Milliseconds);
				expect(result).toBe(8.64e+7);
			});

			it("should be converted to seconds", () => {
				const result = SUT.convertTime(1, TimeUnits.Days, TimeUnits.Seconds);
				expect(result).toBe(86400);
			});
		});

	});

});