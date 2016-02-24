export interface Selectable {
	/**
	 * Gets or sets whether the item is selected or not.
	 */
	isSelected: boolean;
}

export class CollectionExtensions {

	/**
	 * Unselect all collection items and select only the item specified.
	 * @param {Selectable[]} collection collection to unselect.
	 * @param {Selectable} selectItem item to select.
	 */
	mutualExclusiveSelect(collection: Selectable[], selectItem: Selectable): void {

		for (let item of collection) {
			item.isSelected = false;
		}

		selectItem.isSelected = true;
	}
}