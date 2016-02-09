var observable = require("data/observable");

var propChangeEventName = (observable.knownEvents) ? observable.knownEvents.propertyChange : observable.Observable.propertyChangeEvent;
var subsPropName = "subscribedProperties";

observable.Observable.prototype.subscribe = function(propName, callback, thisArg) {
    this[subsPropName] = this[subsPropName] || {};
 
    function propChangeHandler(changeObj) {
        if (changeObj.propertyName == propName && (typeof(changeObj.object[subsPropName][propName]) == "function")) {
            if (thisArg) {
                changeObj.object[subsPropName][propName].apply(changeObj.object, [changeObj]);
            }
            else {
                changeObj.object[subsPropName][propName](changeObj);
            }
        }
    }
    
    if (!this[subsPropName].hasOwnProperty(propName)) {
        this[subsPropName][propName] = callback;  
        this.addEventListener(propChangeEventName, propChangeHandler, thisArg); 
    }
};

observable.Observable.prototype.unsubscribe = function(propName, callback) {
    if (typeof(this[subsPropName]) != "object") return;
    if (!this[subsPropName].hasOwnProperty(propName)) return;
    delete this[subsPropName][propName];   
    this.removeEventListener(propChangeEventName, callback);
};
