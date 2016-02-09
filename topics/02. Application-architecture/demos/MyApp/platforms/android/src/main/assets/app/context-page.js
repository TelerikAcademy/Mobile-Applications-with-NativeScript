var observable = require("data/observable");

var viewModel = new observable.Observable();

function onNavigatedTo(args){

	var page = args.object;
	viewModel.set('info',args.context.info );
	page.bindingContext = viewModel;
}

function onLoaded(args){

}

exports.onNavigatedTo = onNavigatedTo;
exports.onLoaded = onLoaded;
