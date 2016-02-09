var observable = require("data/observable");
var HelloWorldModel = (function(parent) {
    var HelloWorldModel = Object.create(parent);


    HelloWorldModel.init = function() {
        this.counter = 42;
        this.message = this.counter + " taps left";
        return this;
    }

    HelloWorldModel.tapAction = function() {
        this.counter--;
        if (this.counter <= 0) {
            this.message = "Hoorraaay! You unlocked the NativeScript clicker achievement!";
        } else {
            this.message = this.counter + " taps left";
        }
    }

    return HelloWorldModel;
})(observable.Observable);
exports.HelloWorldModel = HelloWorldModel;
// exports.mainViewModel = Object.create(HelloWorldModel);