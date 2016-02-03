import * as _ from "lodash";

export interface ISelectable {
	/**
	 * Gets or sets whether the item is selected or not.
	 */
	isSelected: boolean;
}

export class CollectionService {

	/**
	 * Unselect all collection items and select only the item specified.
	 * @param {ISelectable[]} collection collection to unselect.
	 * @param {ISelectable} selectItem item to select.
	 */
	mutualExclusiveSelect(collection: ISelectable[], selectItem: ISelectable): void {
		
		_.forEach(collection, x => {
			x.isSelected = false;
		});

		selectItem.isSelected = true;
	}
}