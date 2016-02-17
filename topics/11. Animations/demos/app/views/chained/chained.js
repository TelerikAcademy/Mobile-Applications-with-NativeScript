'use strict';

let color = require('color');

function pageLoaded(args) {
  var page = args.object;
}

exports.pageLoaded = pageLoaded;

exports.animate = function(args) {
  let view = args.object;
  view.animate({
      translate: {
        x: 200,
        y: 360
      },
      duration: 2000
    })
    .then(function() {
      return view.animate({
        scale: {
          y: 2,
          x: 1
        },
        duration: 2000
      });
    })
    .then(function() {
      return view.animate({
          backgroundColor: new color.Color('white')
        })
        .then(function() {
          return view.animate({
            opacity: 0,
            duration: 2000
          });
        });
    });
};