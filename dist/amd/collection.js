define(["require", "exports"], function (require, exports) {
    "use strict";
    var CollectionExtensions = (function () {
        function CollectionExtensions() {
        }
        /**
         * Unselect all collection items and select only the item specified.
         * @param {Selectable[]} collection collection to unselect.
         * @param {Selectable} selectItem item to select.
         */
        CollectionExtensions.prototype.mutualExclusiveSelect = function (collection, selectItem) {
            for (var _i = 0, collection_1 = collection; _i < collection_1.length; _i++) {
                var item = collection_1[_i];
                item.isSelected = false;
            }
            selectItem.isSelected = true;
        };
        return CollectionExtensions;
    }());
    exports.CollectionExtensions = CollectionExtensions;
});

//# sourceMappingURL=collection.js.map
