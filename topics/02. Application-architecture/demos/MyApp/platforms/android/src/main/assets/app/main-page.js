var vmModule = require("./main-view-model");
var view = require("ui/core/view");
var labelModule = require("ui/label");
var frameModule = require("ui/frame");
var pagesModule = require("ui/page");

var pageModules = (function() {

  var topmost,
    factoryFunc = function() {
      var label = new labelModule.Label();
      label.text = "Nav with Function";
      var page = new pagesModule.Page();
      page.content = label;
      page.addCss("label {font-size: 30; horizontal-align: center; margin: 20;}")
      return page;
    };

  var pageModules = {
    pageLoaded: function(args) {
      var page = args.object;
      page.bindingContext = vmModule.mainViewModel;
      topmost = frameModule.topmost();
    },

    navWithPageName: function() {
      console.log('nav');
      topmost.navigate("details-page");
    },

    navWithFunc: function() {
      topmost.navigate(factoryFunc);

    },

    navWithContext: function() {
      var navigationEntry = {
        moduleName: "context-page",
        context: {
          info: "Passed from Main Page.",
        },
        animated: false
      };

      topmost.navigate(navigationEntry);
    },

    onNav: function(){
    	console.log('nav main page')
    }

  }

  return pageModules;
})();

exports.navWithPageName = pageModules.navWithPageName;
exports.navWithFunc = pageModules.navWithFunc;
exports.navWithContext = pageModules.navWithContext;
exports.tapAction = vmModule.tapAction;
exports.onNav = pageModules.onNav;

exports.pageLoaded = pageModules.pageLoaded;
