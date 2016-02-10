var observable = require("data/observable");

var counterPropName = 'counter';
var messagePropName = 'message';

var HelloWorldModel = new observable.Observable();

HelloWorldModel.set(counterPropName, 42);
HelloWorldModel.set(messagePropName, HelloWorldModel.get(counterPropName) + ' taps left');

var tapAction = function() {
  HelloWorldModel.set(counterPropName, HelloWorldModel.get(counterPropName) - 1);
  var currentCount = HelloWorldModel.get(counterPropName);
  if (currentCount <= 0) {
    HelloWorldModel.set(messagePropName, "Hello NativeScript");
  } else {
    HelloWorldModel.set(messagePropName, currentCount + " taps left");
  }

  return tapAction;
};

exports.mainViewModel = HelloWorldModel;
exports.tapAction = tapAction;
