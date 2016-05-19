// app.js
'use strict';

let app = require("application");

let db = {};

app.mainModule = "main-page";
app.cssFile = "./app.css";
app.start();

require('./app-lifecycle')(app);