<!-- section start -->
<!-- attr: { id:'title', class:'slide-title', hasScriptWrapper:true } -->
# Application Architecture

<div class="signature">
    <p class="signature-course">Mobile Applications with NativeScript</p>
    <p class="signature-initiative">Telerik Software Academy</p>
    <a href="http://academy.telerik.com" class="signature-link">http://academy.telerik.com</a>
</div>

<!-- section start -->
<!-- attr: { id:'table-of-contents' } -->
# Table of Contents
-  Page management
-  Navigation
-  Supporting Multiple Screens

<!-- section start -->
<!-- attr: { class:'slide-section', id:'coming-next', showInPresentation: true } -->
<!-- # Telerik Platform
## Page management -->

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Page management

- Apps consist of pages which represents the different application screens.
- The pages are instances of the class page from the Page module.

```js
<!-- page-common.js -->
var content_view_1 = require("ui/content-view");
var Page = (function (_super) {
    __extends(Page, _super);
    return Page;
})(content_view_1.ContentView);
```

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Page management
- Each class instance inherits the content property which holds the root visual element of the UI.

```js
<!-- content-view.js -->
var view = require("ui/core/view");
var ContentView = (function (_super) {
    __extends(ContentView, _super);
    function ContentView() {
        _super.apply(this, arguments);
    }
    return ContentView;
})(view.CustomLayoutView);
exports.ContentView = ContentView;
```

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Create pages
- There are two approaches of creating pages in NativeScript

- The XML way - defining UI and code separately

`1.` Create XML file to hold the layout of the page

```xml
<!-- main-page.xml-->
<Page loaded="onPageLoaded">
  <Label text="Hello, world!"/>
</Page>
```
<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Create pages

`2.` Create js file for the code

```js
// main-page.js
function onPageLoaded(args) {
    console.log("Page Loaded");
}
exports.onPageLoaded = onPageLoaded;
```


- The two file names (.js and .xml) must match


<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Create pages

- Create a page directly in the code

```js
var pagesModule = require("ui/page");
var labelModule = require("ui/label");
function createPage() {
    var label = new labelModule.Label();
    label.text = "Hello, world!";
    var page = new pagesModule.Page();
    page.content = label;
    return page;
}
exports.createPage = createPage;
```

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Set the Home Page

- The entry point of the application
- You will need to use the `mainModule` from the `Application module`
- NativeScript searches for the XML file with the name specified. It is parsed and then drawn on the screen.
- Then if a `.js` or `.ts` file exists NativeScript executes it.

```js
<!-- Loading main page -->
var application = require("application");
application.mainModule = "main-page";
application.start();
```


<!-- section start -->
<!-- attr: { id:'questions', class:'slide-section',showInPresentation: true } -->
<!-- # Questions
## Mobile Applications with NativeScript -->
[link to the forum](http://telerikacademy.com/Forum/Category/62/ios-mobile-apps)
