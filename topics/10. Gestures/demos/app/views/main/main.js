'use strict';

let view = require('ui/core/view');
let AbsoluteLayout = require('ui/layouts/absolute-layout')
  .AbsoluteLayout;

function pageLoaded(args) {
  let page = args.object;
  let rect = view.getViewById(page, 'rect');
  let initialSize = {
    width: 100,
    height: 100
  };
  rect.width = initialSize.width;
  rect.height = initialSize.height;
  rect.on('pan', function(args) {
    let top = AbsoluteLayout.getTop(rect);
    let left = AbsoluteLayout.getLeft(rect);

    top += args.deltaY;
    left += args.deltaX;

    AbsoluteLayout.setTop(rect, top);
    AbsoluteLayout.setLeft(rect, left);
  });

  rect.on('doubleTap', function(args) {
    rect.width *= 2;
    rect.height *= 2;
  });

  rect.on('longPress', function(args) {
    rect.width = initialSize.width;
    rect.height = initialSize.height;
  });
}

exports.pageLoaded = pageLoaded;