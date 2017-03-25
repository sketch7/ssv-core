import * as SUT from "./math";

describe("Math Utils", () => {

	describe("roundSpecs", () => {

		describe("given a string value", () => {

			describe("when the precision is default (2)", () => {
				it("should be rounded to 2 decimal places", () => {
					const result = SUT.round("15.215");
					expect(result).toBe(15.21);
				});
			});

			describe("when the precision is 3", () => {
				it("should be rounded to 3 decimal places", () => {
					const result = SUT.round("21.2567", 3);
					expect(result).toBe(21.257);
				});
			});
		});

		describe("given a numeric value", () => {

			describe("when the precision is default (2)", () => {
				it("should be rounded to 2 decimal places", () => {
					const result = SUT.round(22.256);
					expect(result).toBe(22.26);
				});
			});

			describe("when the precision is 3", () => {
				it("should be rounded to 3 decimal places", () => {
					const result = SUT.round(1337.14684, 3);
					expect(result).toBe(1337.147);
				});
			});
		});
	});

});