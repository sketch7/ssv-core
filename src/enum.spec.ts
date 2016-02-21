import {EnumExtensions} from "./enum";

enum CharacterStatus {
	Elite = 1,
	Boss = 2,
	Normal = 3,
	RaidBoss = 4
}


describe("EnumExtensions", () => {

	let enumExtensions = new EnumExtensions();

	describe("getNamesSpecs", () => {

		it("should return enum names as array.", () => {
			let result = enumExtensions.getNames(CharacterStatus);
			expect(result).toEqual(["Elite", "Boss", "Normal", "RaidBoss"]);
		});

	});

	describe("getNamesKebabSpecs", () => {

		it("should return enum kebab names as array.", () => {
			let result = enumExtensions.getNamesKebab(CharacterStatus);
			expect(result).toEqual(["elite", "boss", "normal", "raid-boss"]);
		});

	});

	describe("getValuesSpecs", () => {

		it("should return enum values as array.", () => {
			let result = enumExtensions.getValues(CharacterStatus);
			expect(result).toEqual([1, 2, 3, 4]);
		});

	});

});