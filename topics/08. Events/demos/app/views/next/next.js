'use strict';


function pageLoaded(args) {
  console.log('Next is loaded!');
  let page = args.object;
}

function pageUnloaded() {
  console.log('Next is unloaded!');
}

exports.pageUnloaded = pageUnloaded;
exports.pageLoaded = pageLoaded;

exports.labelLoaded = function() {
  console.log('Label is loaded!');
};
exports.labelUnloaded = function() {
  console.log('Label is unloaded!');
};