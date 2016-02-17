//  app-lifecycle/android.js

module.exports = function(app) {
  if (app.android) {
    app.android.on('activityCreated', function(args) {
      console.log("': " + args.eventName + ", Activity: " + args.activity + ", Bundle: " + args.bundle);
    });

    app.android.on('activityDestroyed', function(args) {
      console.log("': " + args.eventName + ", Activity: " + args.activity);
    });

    app.android.on('activityStarted', function(args) {
      console.log("': " + args.eventName + ", Activity: " + args.activity);
    });

    app.android.on('activityPaused', function(args) {
      console.log("': " + args.eventName + ", Activity: " + args.activity);
    });

    app.android.on('activityResumed', function(args) {
      console.log("': " + args.eventName + ", Activity: " + args.activity);
    });

    app.android.on('activityStopped', function(args) {
      console.log("': " + args.eventName + ", Activity: " + args.activity);
    });

    app.android.on('saveActivityState', function(args) {
      console.log("': " + args.eventName + ", Activity: " + args.activity + ", Bundle: " + args.bundle);
    });

    app.android.on('activityResult', function(args) {
      console.log("': " + args.eventName + ", Activity: " + args.activity +
        ", requestCode: " + args.requestCode + ", resultCode: " + args.resultCode + ", Intent: " + args.intent);
    });

    app.android.on('activityBackPressed', function(args) {
      console.log("': " + args.eventName + ", Activity: " + args.activity);
      // Set args.cancel = true to cancel back navigation and do something custom.
    });
  }
};