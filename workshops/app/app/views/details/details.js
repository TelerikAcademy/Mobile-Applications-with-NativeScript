'use strict';

let vm = require('./details-view-model');

let services = require('../../services');

function pageLoaded(args) {}

function pageNavigatedTo(args) {
  let page = args.object;
  let course = args.context;
  page.bindingContext = vm.create(course.id, course.title, services);
}

function zoomInDescription(args) {
  args.object.fontSize += 1;
}

function zoomOutDescription(args) {
  args.object.fontSize -= 1;
}

module.exports = {
  pageLoaded,
  pageNavigatedTo,
  zoomInDescription,
  zoomOutDescription
};