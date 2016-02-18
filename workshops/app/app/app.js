var application = require("application");
application.start({
  moduleName: "./views/home/home"
});

global.baseUrl = 'http://192.168.201.154:9002/api';