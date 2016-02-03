define(["require", "exports"], function (require, exports) {
    var StringService = (function () {
        function StringService() {
        }
        StringService.prototype.interpolateUrl = function (url, data) {
            data = data || {};
            var interpolatedUrl = url.replace(/(\(\s*|\s*\)|\s*\|\s*)/g, "");
            for (var property in data) {
                if (data.hasOwnProperty(property)) {
                    interpolatedUrl = interpolatedUrl.replace(":" + property, data[property]);
                }
            }
            return interpolatedUrl;
        };
        return StringService;
    })();
    exports.StringService = StringService;
});

//# sourceMappingURL=string.svc.js.map
