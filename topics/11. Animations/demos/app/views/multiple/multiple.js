'use strict';

let color = require('color');

function pageLoaded(args) {
  var page = args.object;
}

exports.pageLoaded = pageLoaded;

exports.animate = function(args) {
  args.object.animate({
    duration: 3000,
    translate: {
      x: 200,
      y: 360
    },
    scale: {
      y: 2,
      x: 1
    },
    backgroundColor: new color.Color('white')
  });
};