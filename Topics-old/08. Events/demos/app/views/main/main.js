'use strict';

let vmModule = require("./main-view-model");
let view = require('ui/core/view');
let moment = require('moment');
let page;

function pageLoaded(args) {
  page = args.object;
  page.bindingContext = vmModule.mainViewModel;
}

exports.onItemTapped = function(args) {
  console.dir(new Date());
};

exports.pageLoaded = pageLoaded;

let frameModule = require('ui/frame');

exports.onGoToNextTap = function(args) {
  let topmost = frameModule.topmost();
  topmost.navigate('./views/next/next');
};