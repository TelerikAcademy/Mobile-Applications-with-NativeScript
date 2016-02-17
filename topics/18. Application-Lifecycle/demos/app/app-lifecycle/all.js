// app-lifecycle/all.js

module.exports = function(app) {
  app.on('resume', function() {
    console.log('Resumed');
  });

  app.on('suspend', function() {
    console.log('Suspended');
  });

  app.on('exit', function() {
    console.log('Exited');
  });
};