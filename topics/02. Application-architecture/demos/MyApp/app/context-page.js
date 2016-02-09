var observable = require("data/observable");

function onNavigatedTo(args){

	var page = args.object;
	
	page.bindingContext = page.navigationContext;
}

exports.onNavigatedTo = onNavigatedTo;
