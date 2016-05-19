var observable = require("data/observable");
var frameModule = require("ui/frame");

var pageModules = (function() {

	var topmost;
    var pageModules = {

        onNavigatedTo: function(args) {
            var page = args.object;
            page.bindingContext = page.navigationContext;
            topmost = frameModule.topmost();
        },

        // Navigating with context.
        navWithContext: function() {
            var navigationEntry = {
                moduleName: "./views/main/main-page",
                animated: false
            };

            topmost.navigate(navigationEntry);
        }
    }

    return pageModules;
})();


exports.navWithContext = pageModules.navWithContext;
exports.onNavigatedTo = pageModules.onNavigatedTo;
