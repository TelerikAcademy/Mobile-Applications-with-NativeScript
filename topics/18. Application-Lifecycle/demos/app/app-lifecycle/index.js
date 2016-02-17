// app-lifecycle/index.js

module.exports = function(app) {
  //find all files in app-lifecycle directory

  require('./all')(app);
  require('./android')(app);
  // require('./app-lifecycle/ios')(app);
};