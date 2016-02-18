'use strict';

let ObservableArray = require('data/observable-array')
  .ObservableArray;

let frame = require('ui/frame');

let services = require('../../services');

let vm = require('./home-view-model')
  .create(services);

function pageLoaded(args) {
  let page = args.object;
  page.bindingContext = vm;
}

function courseItemTapped(args) {
  let page = args.object.page;
  let vm = page.bindingContext;
  let index = args.index;
  let course = vm.courses.getItem(index);
  let options = {
    moduleName: './views/details/details',
    context: course
  };
  frame.topmost()
    .navigate(options);
}

module.exports = {
  courseItemTapped,
  pageLoaded
};