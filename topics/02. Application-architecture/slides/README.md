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
<!-- # Page management -->

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Page management

- Apps consist of pages which represents the different application screens
- The pages are instances of the class page from the Page module

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
- Each class instance inherits the content property which holds the root visual element of the UI

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
<!-- section start -->
<!-- attr: { class:'slide-section', showInPresentation: true } -->
<!-- # Creating pages -->

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
- NativeScript searches for the XML file with the name specified. It is parsed and then drawn on the screen
- Then if a `.js` or `.ts` file exists NativeScript executes it

```js
<!-- Loading main page -->
var application = require("application");
application.mainModule = "main-page";
application.start();
```

<!-- attr: { class:'slide-section', showInPresentation: true } -->
# Creating pages
## Demo


<!-- section start -->
<!-- attr: { class:'slide-section', showInPresentation: true } -->
<!-- # Navigation -->

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Navigation

- The `Frame` class is responsible for navigation between pages
- Every application has one frame at root level - the `topmost` frame
- The `topmost` frame provides a method called `navigate`. It provides navigation between pages

```js
var frameModule = require("ui/frame");
var topmost = frameModule.topmost();
```
<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Navigation
- The `Page` class instance
    - It carries information about the frame object which navigated to it in the `frame` property
    - You can navigate with the `frame` property as well

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Navigation types
## Navigate by Page Name

- The simplest way to Navigate
    - Just pass page name in the topmost object
        - You should be careful with the name provided.

```js
topmost.navigate("details-page");
```

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Navigation types
## Navigate with Function

- The function returns the instance of the page you want to navigate to.

```js
var factoryFunc = function () {
    var label = new labelModule.Label();
    label.text = "Hello, world!";
    var page = new pagesModule.Page();
    page.content = label;
    return page;
};
topmost.navigate(factoryFunc);
```

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Navigation types
## Navigate and Pass Context

- You can pass context to the page with a NavigationEntry object.
    - Finer control over navigation compared to other navigation approaches.
    - You can also animate the navigation.

```js
var navigationEntry = {
    moduleName: "details-page",
    context: {info: "something you want to pass to your page"},
    animated: false
};
topmost.navigate(navigationEntry);
```

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Navigation types
## Navigate and Pass Context

- When you navigate to the page you transfer information from one page to another.
- With the onNavigatedTo callback, you show the details for the entity.

```js
function pageNavigatedTo(args) {
    var page = args.object;
    page.bindingContext = page.navigationContext;
}
```

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Navigation without history

- You can navigate to a page without adding this navigation to the history
- With the onNavigatedTo callback, you show the details for the entity
- Useful if you have multiple-page authentication process
- When the user logs in successfully and redirected to home page.

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Navigation without history
```js
var navigationEntry = {
    moduleName: "main-page",
    clearHistory: true
};
topmost.navigate(navigationEntry);
```

- If `backstackVisible` property is set to false then the Page will be displayed but once navigated from it will not be able to be navigated back to


<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Navigation clear history

- You can completely clear the entire navigation history when navigating to a page
- This will prevent the user from going back to pages previously visited

```js
var navigationEntry = {
    moduleName: "login-page",
    backstackVisible: false
};
topmost.navigate(navigationEntry);
```

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Navigation transitions

- By default, all navigation will be animated and will use the default transition for the platform
- You can control transitions with `navigationTransition` property of the `NavigationEntry` object


```js
var navigationEntry = {
    moduleName: "main-page",
    animated: true,
    navigationTransition: {
        transition: "slide",
        duration: 380,
        curve: "easeIn"
    }
};
topmost.navigate(navigationEntry);
```
- Currently not working. In Progress...


<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Navigation transitions

- The duration property lets you specify the transition duration in milliseconds
    - Default values
        - `350 ms for iOS`
        - `300 ms for Android`
- The curve property lets you specify the animation curve of the transition
   - Default value
        - `easeInOut`

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Navigation transitions

- Set default transition for all `frame` animations

```js
topmost.navigationTransition = { transition: "flip" };
```

- Set default transition for entire application

```js
var frameModule = require("ui/frame");
frameModule.Frame.defaultNavigationTransition = { transition: "fade" };
```


<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 36px;' } -->
# Navigation transitions

- Navigation types
    - `curl` (same as curlUp) (iOS only)
    - `curlUp` (iOS only)
    - `curlDown` (iOS only)
    - `explode` (Android Lollipop an later)
    - `fade`
    - `flip` (same as flipRight)
    - `flipRight`
    - `flipLeft`
    - `slide` (same as slideLeft)
    - `slideLeft`
    - `slideRight`
    - `slideTop`
    - `slideBottom`


<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Navigating back

- The topmost frame tracks the pages the user has visited
- To go back to a previous page, you need to use the goBackMethod of the topmost frame instance.

```js
topmost.goBack();
```

<!-- section start -->
<!-- attr: { id:'questions', class:'slide-section',showInPresentation: true } -->
<!-- # Questions
## Mobile Applications with NativeScript -->
[link to the forum](http://telerikacademy.com/Forum/Category/62/ios-mobile-apps)
