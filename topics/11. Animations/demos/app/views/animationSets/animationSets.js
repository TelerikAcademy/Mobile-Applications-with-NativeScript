'use strict';

let view = require('ui/core/view');
let animationsModule = require('ui/animation');

let selectBtns = [];

function pageLoaded(args) {
  let page = args.object;
  selectBtns.push(view.getViewById(page, 'select-btn-simultaneously'));
  selectBtns.push(view.getViewById(page, 'select-btn-sequentially'));
}

exports.pageLoaded = pageLoaded;
let sequentially = false;

exports.animate = function(args) {
  let page = args.object.page;

  let shape1 = view.getViewById(page, 'shape-1');
  let shape2 = view.getViewById(page, 'shape-2');
  let shape3 = view.getViewById(page, 'shape-3');

  if (args.object.isRefreshed) {

    let definitions = [{
      target: shape1,
      translate: {
        x: 200,
        y: 0
      },
      duration: 1500
    }, {
      target: shape2,
      translate: {
        x: 0,
        y: 200
      },
      duration: 1500
    }, {
      target: shape3,
      translate: {
        x: 200,
        y: 200
      },
      duration: 1500
    }];

    let animationSet = new animationsModule.Animation(definitions, sequentially);

    animationSet.play()
      .then(function() {
        args.object.text = 'Refresh';
        args.object.isRefreshed = false;
      });
  } else {
    [shape1, shape2, shape3].forEach(shape => {
      shape.translateX = 0;
      shape.translateY = 0;
    });

    args.object.text = 'Animate';
    args.object.isRefreshed = true;
  }
};

exports.onSelectBtnTap = function(args) {

  selectBtns.forEach(btn => {
    btn.className = btn.className.replace(/btn-pressed/, '');
  });

  args.object.className += ' btn-pressed';

  sequentially = args.object.state;
};