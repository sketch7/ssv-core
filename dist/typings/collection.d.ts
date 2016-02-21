export interface Selectable {
    /**
     * Gets or sets whether the item is selected or not.
     */
    isSelected: boolean;
}
export declare class CollectionService {
    /**
     * Unselect all collection items and select only the item specified.
     * @param {ISelectable[]} collection collection to unselect.
     * @param {ISelectable} selectItem item to select.
     */
    mutualExclusiveSelect(collection: Selectable[], selectItem: Selectable): void;
}
