define(["require", "exports", "lodash"], function (require, exports, _) {
    var CollectionExtensions = (function () {
        function CollectionExtensions() {
        }
        /**
         * Unselect all collection items and select only the item specified.
         * @param {Selectable[]} collection collection to unselect.
         * @param {Selectable} selectItem item to select.
         */
        CollectionExtensions.prototype.mutualExclusiveSelect = function (collection, selectItem) {
            _.forEach(collection, function (x) {
                x.isSelected = false;
            });
            selectItem.isSelected = true;
        };
        return CollectionExtensions;
    })();
    exports.CollectionExtensions = CollectionExtensions;
});

//# sourceMappingURL=collection.js.map
