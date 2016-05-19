var pageModules = (function() {
   
    var pageModules = {
        onLoaded: function(args) {
            var page = args.object;
            page.bindingContext = page.navigationContext;
        }
    }

    return pageModules
})();

exports.onLoaded = pageModules.onLoaded;

