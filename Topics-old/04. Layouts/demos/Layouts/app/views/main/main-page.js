// var page = require("ui/page");
// var view = require("ui/core/view");
// var labelModule = require("ui/label")
// var observable = require("data/observable");
// var frameModule = require("ui/frame");
// var dialogs = require("ui/dialogs");

// var pageModules = (function() {
//     var model = new observable.Observable({
//         "isSwitched": "OFF",
//         "sliderValue": 58,
//         "minValue": 0,
//         "maxValue": 100,
//         "progressValue": 38,
//         "isBusy": true,
//         "isLoaded": "",
//         "imgSrc": "~/resources/images/homer1.gif",
//         "myItems": ["Pesho", "Gosho", "Ivan"],
//         "htmlString": "http://www.telerikacademy.com",
//         "url": "http://www.telerikacademy.com"
//     });

//     var topmost;

//     var pageModules = {

//         onLoaded: function(args) {
//             var page = args.object;

//             page.bindingContext = model;

//             topmost = frameModule.topmost();
//             // Button
//             var button = view.getViewById(page, "myBtn");

//             var options = {
//                 sourceProperty: "buttonTitle",
//                 targetProperty: "text"
//             };

//             button.bind(options, model);
//             model.set("buttonTitle", "Cancel");

//             // Label
//             var label = view.getViewById(page, "myLabel");


//             var options = {
//                 sourceProperty: "oldText",
//                 targetProperty: "text"
//             };

//             label.bind(options, model);

//             model.set("oldText", "Changed");

//             model.set("switch", true);

//             if (model.get("switch")) {

//             }

//             // Text field
//             var txtField = view.getViewById(page, "myField");

//             var options = {
//                 sourceProperty: "oldText",
//                 targetProperty: "text"
//             };

//             txtField.bind(options, model);
//             model.set("oldText", "My text input");
//         },

//         search: function(args) {
//             console.log("Search for " + args.object.text);
//         },

//         clear: function() {
//             console.log("Clear");
//         },
//         somePropertyChange: function(args) {
//             if (args.propertyName === "checked") {
//                 if (args.value === true) {
//                     model.set("isSwitched", "ON");
//                 } else {
//                     model.set("isSwitched", "OFF");
//                 }
//             }

//             if (args.propertyName === "value") {

//             }
//         },
//         indexChange: function(args) {
//             if (args.newIndex === 7) {
//                 var refresh = setInterval(function() {
//                     if (model.get("progressValue") >= model.get("maxValue")) {
//                         clearInterval(refresh);
//                     }
//                     model.set("progressValue", model.get("progressValue") + 1);
//                 }, 25)
//             }

//             if (args.newIndex === 8) {

//                 var start = 0;
//                 var refresh = setInterval(function() {
//                     start++;
//                     if (start >= 100) {
//                         model.set("isBusy", false);
//                         model.set("isLoaded", "LOADED");
//                         clearInterval(refresh);
//                     }
//                 }, 25)
//             }

//             if (args.newIndex === 9) {

//                 var start = 0;
//                 var refresh = setInterval(function() {
//                     start++;
//                     if (start % 2 === 0) {
//                         model.set("imgSrc", "~/resources/images/homer1.gif");
//                     } else {
//                         model.set("imgSrc", "~/resources/images/homer2.gif");
//                     }
//                 }, 500)
//             }
//         },

//         listTap: function() {
//             var navigationEntry = {
//                 moduleName: "views/list/list-page",
//                 context: model,
//                 animated: false
//             };
//             topmost.navigate(navigationEntry);
//         },
//         htmlTap: function() {
//             var navigationEntry = {
//                 moduleName: "views/html/html-page",
//                 context: model,
//                 animated: false
//             };
//             topmost.navigate(navigationEntry);
//         },
//         webTap: function() {
//             var navigationEntry = {
//                 moduleName: "views/web/web-page",
//                 context: model,
//                 animated: false
//             };
//             topmost.navigate(navigationEntry);
//         }
    
//     }

//     return pageModules;
// })();


// exports.onLoaded = pageModules.onLoaded;
// exports.search = pageModules.search;
// exports.clear = pageModules.clear;
// exports.change = pageModules.somePropertyChange;
// exports.indexChange = pageModules.indexChange;
// exports.listTap = pageModules.listTap;
// exports.htmlTap = pageModules.htmlTap;
// exports.webTap = pageModules.webTap;

