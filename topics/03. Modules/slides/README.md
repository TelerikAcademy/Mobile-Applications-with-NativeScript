<!-- section start -->
<!-- attr: { id:'title', class:'slide-title', hasScriptWrapper:true } -->
# Mobile Applications with NativeScript
## Modules

<div class="signature">
    <p class="signature-course">Mobile Applications with NativeScript</p>
    <p class="signature-initiative">Telerik Software Academy</p>
    <a href="http://academy.telerik.com" class="signature-link">http://academy.telerik.com</a>
</div>

<!-- section start -->
<!-- attr: { id:'table-of-contents', style:'font-size:38px' } -->
# Table of Contents
- Core Modules
- Device Functionality Modules
- Data Modules
- User Interface Modules
  - Layouts
  - Widgets
- WHATWG Polyfills

<!-- section start -->
<!-- attr: { class:'slide-section', showInPresentation:true } -->
# Core Modules
## Subtitle

<!-- attr: { showInPresentation:true } -->
<!-- # Core Modules -->
- `application` module - provides abstraction over platform-specific implementations

```js
var app = require("application");

if (app.android) {
	/* Android specific code */
}
else if (app.ios) {
	/* iOS specific code */
}
```
- [More examples](https://docs.nativescript.org/ApiReference/application/HOW-TO.html)

<!-- attr: { showInPresentation:true } -->
<!-- # Core Modules -->
- `console` module
  - Logging, Time, Assert, Dir, Dump, Trace
  - `console` variable is global
  - Logs appear in `logcat`
- [Examples](https://docs.nativescript.org/ApiReference/console/HOW-TO.html)

<!-- attr: { showInPresentation:true } -->
<!-- # Core Modules -->
- `application-settings` module - save and restore information
  - `setBoolean`, `getBoolean` - for boolean values
  - `setString`, `getString` - for strings
  - `setNumber`, `getNumber` - for numeric values
    - `toFixed` - used to avoid floating point errors
  - `hasKey`, `remove`

```js
var appSettings = require("application-settings");

appSettings.setBoolean("boolKey", true);
var value = appSettings.getBoolean("boolKey", false);
```

<!-- attr: { showInPresentation:true, style:'font-size:44px' } -->
<!-- # Core Modules -->
- `http` module - send requests and receive responses
  - `getString`, `getJSON`, `getImage` - take url as a string
  - `request` - takes object with url, method, headers, content

```js
var http = require("http");

http.getString("https://example.org/")
  .then(function(response) {
	/* do something */
}, function(error) {
	/* log error */
});
```

<!-- attr: { showInPresentation:true } -->
<!-- # Core Modules -->
- `image-source` module

<!-- attr: { showInPresentation:true } -->
<!-- # Core Modules -->
- `timer` module - create, start, stop and react to timers
  - `setTimeout`, `clearTimeout`
  - `setInterval`, `clearInterval`

<!-- attr: { showInPresentation:true } -->
<!-- # Core Modules -->
- `trace` module

<!-- attr: { showInPresentation:true } -->
<!-- # Core Modules -->
- `ui/image-cache` module

<!-- attr: { showInPresentation:true } -->
<!-- # Core Modules -->
- `connectivity` module - check for internet connection

<!-- attr: { class:'slide-section demo', showInPresentation:true } -->
<!-- Core Modules -->
## Live demo

<!-- section start -->
<!-- attr: { class:'slide-section', showInPresentation:true } -->
# Device Functionality Modules
## Subtitle

<!-- attr: { showInPresentation:true } -->
<!-- # Device Functionality Modules -->
- `platform` module

```js
var platformModule = require("platform");

console.log("Device model: " + platformModule.device.model);
console.log("Device type: " + platformModule.device.deviceType);
console.log("OS: " + platformModule.device.os);
console.log("OS version: " + platformModule.device.osVersion);
console.log("SDK Version: " + platformModule.device.sdkVersion);
console.log("Screen width: " + platformModule.screen.mainScreen.widthPixels);
console.log("Screen height: " + platformModule.screen.mainScreen.heightPixels);
console.log("Screen scale: " + platformModule.screen.mainScreen.scale);
```

<!-- section start -->
<!-- attr: { class:'slide-section', showInPresentation:true } -->
# Data Modules
## Subtitle

<!-- attr: { showInPresentation:true } -->
<!-- # Data Modules -->
- `data/observable`, `data/observable-array`, `data/virtual-array`
  - Used for data binding

```js
var observable = require("data/observable");

var person = new observable.Observable({
	/* properties */
});
```

<!-- TODO: more examples -->
<!-- TODO: UI and other modules -->

<!-- section start -->
<!-- attr: { id:'questions', class:'slide-section', showInPresentation:true } -->
# Questions
## Modules
