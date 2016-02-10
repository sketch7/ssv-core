import {CollectionService, ISelectable} from "./collection.svc";

interface ISelectableMock extends ISelectable {
	key: string;
}

describe("CollectionServiceSpec", () => {

	let collectionService = new CollectionService();

	describe("mutualExclusiveSelectSpec", () => {
		let mockSelectableCollection: ISelectableMock[];
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
				collectionService.mutualExclusiveSelect(mockSelectableCollection, itemToSelect);

				expect(itemToSelect.isSelected).toBeTruthy();
				let unselected = mockSelectableCollection.filter(x => !x.isSelected);
				expect(unselected.length).toEqual(3);
			});

		});

		describe("given a non existing item", () => {

			it("should not select any.", () => {

				let itemToSelect = { key: "e", isSelected: false };
				collectionService.mutualExclusiveSelect(mockSelectableCollection, itemToSelect);

				expect(itemToSelect.isSelected).toBeTruthy();
				let unselected = mockSelectableCollection.filter(x => !x.isSelected);
				expect(unselected.length).toEqual(4);
			});

		});

	});
});