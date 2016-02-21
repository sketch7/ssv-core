import {EnumService} from "./enum";

enum CharacterStatus {
	Elite = 1,
	Boss = 2,
	Normal = 3,
	RaidBoss = 4
}


describe("EnumService", () => {

	let enumService = new EnumService();

	describe("getNames", () => {

		it("should return enum names as array.", () => {
			let result = enumService.getNames(CharacterStatus);
			expect(result).toEqual(["Elite", "Boss", "Normal", "RaidBoss"]);
		});

	});

	describe("getNamesKebab", () => {

		it("should return enum kebab names as array.", () => {
			let result = enumService.getNamesKebab(CharacterStatus);
			expect(result).toEqual(["elite", "boss", "normal", "raid-boss"]);
		});

	});

	describe("getValues", () => {

		it("should return enum values as array.", () => {
			let result = enumService.getValues(CharacterStatus);
			expect(result).toEqual([1, 2, 3, 4]);
		});

	});

});