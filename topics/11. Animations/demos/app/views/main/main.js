'use strict';

let frame = require('ui/frame');

function pageLoaded(args) {
  var page = args.object;
}
exports.pageLoaded = pageLoaded;

exports.goToSingleAnimation = function() {
  frame.topmost()
    .navigate('./views/single/single');
};

exports.goToMultipleAnimations = function() {
  frame.topmost()
    .navigate('./views/multiple/multiple');
};

exports.goToChainedAnimations = function() {
  frame.topmost()
    .navigate('./views/chained/chained');
};
exports.goToAnimationSets = function() {
  frame.topmost()
    .navigate('./views/animationSets/animationSets');
};