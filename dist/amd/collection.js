define(["require", "exports", "lodash"], function (require, exports, _) {
    var CollectionService = (function () {
        function CollectionService() {
        }
        /**
         * Unselect all collection items and select only the item specified.
         * @param {ISelectable[]} collection collection to unselect.
         * @param {ISelectable} selectItem item to select.
         */
        CollectionService.prototype.mutualExclusiveSelect = function (collection, selectItem) {
            _.forEach(collection, function (x) {
                x.isSelected = false;
            });
            selectItem.isSelected = true;
        };
        return CollectionService;
    })();
    exports.CollectionService = CollectionService;
});

//# sourceMappingURL=collection.js.map
