'use strict';

function pageLoaded(args) {
  var page = args.object;
}

exports.pageLoaded = pageLoaded;

exports.animate = function(args) {
  args.object.animate({
    duration: 3000,
    translate: {
      x: 200,
      y: 370
    }
  });
};