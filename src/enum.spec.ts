import * as SUT from "./enum";

enum CharacterStatus {
	Elite = 1,
	Boss = 2,
	Normal = 3,
	RaidBoss = 4
}


describe("Enum Utils", () => {

	describe("getNamesSpecs", () => {

		it("should return enum names as array.", () => {
			let result = SUT.getNames(CharacterStatus);
			expect(result).toEqual(["Elite", "Boss", "Normal", "RaidBoss"]);
		});

	});

	describe("getNamesKebabSpecs", () => {

		it("should return enum kebab names as array.", () => {
			let result = SUT.getNamesKebab(CharacterStatus);
			expect(result).toEqual(["elite", "boss", "normal", "raid-boss"]);
		});

	});

	describe("getValuesSpecs", () => {

		it("should return enum values as array.", () => {
			let result = SUT.getValues(CharacterStatus);
			expect(result).toEqual([1, 2, 3, 4]);
		});

	});

});