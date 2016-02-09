var observable = require("data/observable");
var pages = require("ui/page");
var labelModule = require("ui/label");
var frame = require("ui/frame")

var mainPage = new pages.Page();

var modalPageModule = require("./login-page");
 var context = "some custom context";
 var fullscreen = true;
 mainPage.showModal(modalPageModule, context, function closeCallback(username, password) {
     // Log the user in...
 }, fullscreen);