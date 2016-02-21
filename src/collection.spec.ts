﻿import {CollectionExtensions, Selectable} from "./collection";

interface SelectableMock extends Selectable {
	key: string;
}

describe("CollectionExtensionsSpecs", () => {

	let collectionExtensions = new CollectionExtensions();

	describe("mutualExclusiveSelectSpec", () => {
		let mockSelectableCollection: SelectableMock[];
		beforeEach(() => {
			mockSelectableCollection = [
				{ isSelected: true, key: "a" },
				{ isSelected: false, key: "b" },
				{ isSelected: false, key: "c" },
				{ isSelected: true, key: "d" },
			];
		});

		describe("given an existing item", () => {

			it("should select only the selected item.", () => {

				let itemToSelect = mockSelectableCollection[1];
				collectionExtensions.mutualExclusiveSelect(mockSelectableCollection, itemToSelect);

				expect(itemToSelect.isSelected).toBeTruthy();
				let unselected = mockSelectableCollection.filter(x => !x.isSelected);
				expect(unselected.length).toEqual(3);
			});

		});

		describe("given a non existing item", () => {

			it("should not select any.", () => {

				let itemToSelect = { key: "e", isSelected: false };
				collectionExtensions.mutualExclusiveSelect(mockSelectableCollection, itemToSelect);

				expect(itemToSelect.isSelected).toBeTruthy();
				let unselected = mockSelectableCollection.filter(x => !x.isSelected);
				expect(unselected.length).toEqual(4);
			});

		});

	});
});