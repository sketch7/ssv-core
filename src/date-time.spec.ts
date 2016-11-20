import * as SUT from "./date-time";
import { TimeUnits } from "./date-time";

describe("DateTime Utils", () => {

	describe("fromMillisecondsToSecondsSpecs", () => {

		describe("given time in milliseconds", () => {

			it("should be converted to seconds", () => {
				let result = SUT.fromMillisecondsToSeconds(21000);
				expect(result).toBe(21);
			});

		});

	});

	describe("fromMillisecondsToMinutesSpecs", () => {

		describe("given time in milliseconds", () => {

			it("should be converted to minutes", () => {
				let result = SUT.fromMillisecondsToMinutes(75000);
				expect(result).toBe(1.25);
			});

		});

	});

	describe("fromSecondsToMillisecondsSpecs", () => {

		describe("given time in seconds", () => {

			it("should be converted to milliseconds", () => {
				let result = SUT.fromSecondsToMilliseconds(2.5);
				expect(result).toBe(2500);
			});

		});

	});

	describe("fromSecondsToMinutesSpecs", () => {

		describe("given time in seconds", () => {

			it("should be converted to minutes", () => {
				let result = SUT.fromSecondsToMinutes(75);
				expect(result).toBe(1.25);
			});

		});

	});

	describe("fromMinutesToMillisecondsSpecs", () => {

		describe("given time in minutes", () => {

			it("should be converted to milliseconds", () => {
				let result = SUT.fromMinutesToMilliseconds(2.5);
				expect(result).toBe(150000);
			});

		});

	});

	describe("fromMinutesToSecondsSpecs", () => {

		describe("given time in minutes", () => {

			it("should be converted to seconds", () => {
				let result = SUT.fromMinutesToSeconds(1.25);
				expect(result).toBe(75);
			});

		});

	});

	describe("convertTimeSpecs", () => {

		describe("given time in milliseconds", () => {

			it("should be converted to seconds", () => {
				let result = SUT.convertTime(3000, TimeUnits.Milliseconds, TimeUnits.Seconds);
				expect(result).toBe(3);
			});

			it("should be converted to minutes", () => {
				let result = SUT.convertTime(72000, TimeUnits.Milliseconds, TimeUnits.Minutes);
				expect(result).toBe(1.2);
			});

		});

		describe("given time in seconds", () => {

			it("should be converted to milliseconds", () => {
				let result = SUT.convertTime(3, TimeUnits.Seconds, TimeUnits.Milliseconds);
				expect(result).toBe(3000);
			});

			it("should be converted to minutes", () => {
				let result = SUT.convertTime(120, TimeUnits.Seconds, TimeUnits.Minutes);
				expect(result).toBe(2);
			});

		});

		describe("given time in minutes", () => {

			it("should be converted to milliseconds", () => {
				let result = SUT.convertTime(1.2, TimeUnits.Minutes, TimeUnits.Milliseconds);
				expect(result).toBe(72000);
			});

			it("should be converted to seconds", () => {
				let result = SUT.convertTime(1.25, TimeUnits.Minutes, TimeUnits.Seconds);
				expect(result).toBe(75);
			});

		});

	});

});