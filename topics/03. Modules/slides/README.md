<!-- section start -->
<!-- attr: { id:'title', class:'slide-title', hasScriptWrapper:true } -->
# Mobile Applications with NativeScript
## Modules

<div class="signature">
    <p class="signature-course">Mobile Applications NativeScript</p>
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
  - Logging
  - Time
  - Assert
  - Dir
  - Dump
  - Trace
- [Examples](https://docs.nativescript.org/ApiReference/console/HOW-TO.html)

<!-- attr: { showInPresentation:true } -->
<!-- # Core Modules -->
- `application-settings` module - save and restore information

<!-- attr: { showInPresentation:true } -->
<!-- # Core Modules -->
- `http` module - send requests and receive responses

<!-- attr: { showInPresentation:true } -->
<!-- # Core Modules -->
- `image-source` module

<!-- attr: { showInPresentation:true } -->
<!-- # Core Modules -->
- `timer` module - create, start, stop and react to timers

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
# Device functionality module
## Subtitle

<!-- attr: { showInPresentation:true } -->
<!-- # Device functionality module -->
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
<!-- attr: { id:'questions', class:'slide-section', showInPresentation:true } -->
# Questions
## Modules
