var MyDelegate = (function(_super) {
  __extends(MyDelegate, _super);

  function MyDelegate() {
    _super.apply(this, arguments);
  }
  MyDelegate.prototype.applicationDidFinishLaunchingWithOptions = function(application, launchOptions) {
    console.log("applicationWillFinishLaunchingWithOptions: " + launchOptions);
    return true;
  };
  MyDelegate.prototype.applicationDidBecomeActive = function(application) {
    console.log("applicationDidBecomeActive: " + application);
  };
  MyDelegate.ObjCProtocols = [UIApplicationDelegate];
  return MyDelegate;
})(UIResponder);

module.exports = function(app) {
  app.ios.delegate = MyDelegate;
};