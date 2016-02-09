var vmModule = require("./main-view-model");
var view = require("ui/core/view");
var label = require("ui/label");

function pageLoaded(args) {
    var page = args.object;

    page.bindingContext = vmModule.mainViewModel;
	
    
}
exports.pageLoaded = pageLoaded;