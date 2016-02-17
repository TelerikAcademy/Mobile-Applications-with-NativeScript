'use strict';

var observable = require("data/observable");
let observableArrayModule = require('data/observable-array');
let moment = require('moment');

class HelloWorldModel extends observable.Observable {
  constructor() {
    super();

    this.items = new observableArrayModule.ObservableArray([]);
  }

  addItem() {
    this.items.push({
      time: moment()
        .format('HH:mm:ss')
    });
    console.dir(this.items);
  }

  onItemTapped(args) {
    this.items.splice(args.index, 1);
  }
}

exports.HelloWorldModel = HelloWorldModel;
exports.mainViewModel = new HelloWorldModel();