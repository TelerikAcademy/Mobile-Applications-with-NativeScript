var vmModule = require("./main-view-model");
var labelModule = require("ui/label");
var frameModule = require("ui/frame");
var pagesModule = require("ui/page");

var pageModules = (function() {

    var topmost;
    var factoryFunc = function() {
        var label = new labelModule.Label();
        label.text = "Nav with Function";
        var page = new pagesModule.Page();
        page.content = label;
        page.addCss("label {font-size: 30; horizontal-align: center; margin: 20;}")
        return page;
    };

    var pageModules = {

        // Loading page event
        pageLoaded: function(args) {
            var page = args.object;
            page.bindingContext = vmModule.mainViewModel;
            topmost = frameModule.topmost();
        },

        // Navigation with page name
        navWithPageName: function() {
            console.log('nav');
            topmost.navigate("./views/details/details-page");
        },

        // Navigation with function and dinamically create page
        navWithFunc: function() {
            topmost.navigate(factoryFunc);

        },

        // Navigating with context.
        navWithContext: function() {
            var navigationEntry = {
                moduleName: "./views/context/context-page",
                // Makes the page we are navigating to to not be available on back button
                backstackVisible: false,
                context: {
                    info: "Passed from Main Page.",
                },
                animated: true,
                navigationTransition: {
                    transition: "flip ",
                    // duration: 380,
                    // curve: "easeIn"
                    
                },
                // Removes all the navigation history
                // clearHistory: true
            };

            topmost.navigate(navigationEntry);
        },

        // Test
        onNav: function() {
            console.log('nav main page')
        }

    }

    return pageModules;
})();

exports.pageLoaded = pageModules.pageLoaded;
exports.navWithPageName = pageModules.navWithPageName;
exports.navWithFunc = pageModules.navWithFunc;
exports.navWithContext = pageModules.navWithContext;
exports.onNav = pageModules.onNav;

exports.tapAction = vmModule.tapAction;
