<!-- section start -->
<!-- attr: { id:'title', class:'slide-title', hasScriptWrapper:true } -->
# UI and UI Components
## Telerik NativeScript

<div class="signature">
    <p class="signature-course">Mobile Applications with NativeScript</p>
    <p class="signature-initiative">Telerik Software Academy</p>
    <a href="http://academy.telerik.com" class="signature-link">http://academy.telerik.com</a>
</div>

<!-- section start -->
<!-- attr: { id:'table-of-contents' } -->
# Table of Contents
-  UI Components
-  Bindings Basics

<!-- section start -->
<!-- attr: { class:'slide-section', showInPresentation: true } -->
<!-- # UI Components -->

<!-- attr: { class:'slide-section', id:'coming-next', showInPresentation: true } -->
<!-- #The Basics -->

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# The Basics

- The UI of your app could be implemented with separate pages for each app screen
- Or your application could use tab view with multiple screens in one page
- For each page you need `.xml` file for the layout
- For each `.xml` file, NativeScript searches for `.js` or `.ts` file for the business logic of the page
- Each app have a Home page
- To access variables or functions from the UI, you need to declare them in the `exports` object in the module


<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# The Basics
-  you can specify code files and CSS files for your `.xml` using attributes
    - `codeFile`
    - `cssFile`

```js
<Page codeFile="~/your-code-file" cssFile="~/your-styles.css">
    <StackLayout>
     ...
    </StackLayout>
</Page>
```

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# The Basics
- Provides a wide range of built-in user interface components
    - `layouts`
    - `widgets`
- When your XML files are parsed NativeScript looks for components which match a name in the module `exports`

```js
var view = require("ui/core/view");
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        _super.apply(this, arguments);
    }
    return Button;
})(view.View);
exports.Button = Button;
```
<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# The Basics

- Default content components
    - pages
    - layouts
- These components let you arrange your your user interactive components in specific ways


<!-- attr: { class:'slide-section', id:'coming-next', showInPresentation: true } -->
<!-- # Widgets -->

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Button

- Require button module

```js
var buttonModule = require("ui/button");
var observable = require("data/observable");
```
- Tap event on button

```xml
  <Button tap="buttonTap" />
```

- Binding text property directly to model

```js
var model = new observable.Observable();
var options = {
    sourceProperty: "buttonTitle",
    targetProperty: "text"
};
button.bind(options, model);
model.set("buttonTitle", "Cancel");
```

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Label

- Used for creating a lable text
- Require label module

```js
var LabelModule = require("ui/label");
```

- Binding text property to view-model property

```js
<Label text="{{ title }}" />
```

- Creating new label and set properties

```js
var label = new LabelModule.Label();
label.text = "Some text here";
label.className = "myClass";
label.id = "myId";
```

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Label

- Binding text property of `label` to an observable model

```js
var label = new LabelModule.Label();
var model = new observableModule.Observable();
var bindingOptions = {
    sourceProperty: "oldText",
    targetProperty: "text"
};
label.bind(bindingOptions, model);
sourceModel.set("oldText", "changed");
```

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Text field

- Used for creating input field
- Require text field module

```js
var textFieldModule = require("ui/text-field");
```

- Properties of the text field
    - `hint` - like placeholder of input field
    - `text` - text value of the field
    - `secure` - hides text. Used for passwords


<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Text view
- Used for inputing and showing multiline text
- Require text view module

```js
var textFieldModule = require("ui/text-view");
```

- Properties of the text field
    - `hint` - like placeholder of input field
    - `text` - text value of the field
    - `editable` - makes it editable or not

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Search bar
- The SearchBar provides a user interface for entering search queries and submitting requests to search provider
- Require search bar module

```js
var searchBarModule = require("ui/search-bar");
```

- Events of the serach bar
    - `submit` - submits the serach query
    - `clear` - clears the text. When **x** is pressed or all the text is deleted

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Switch
- Provides a two-state toggle switch with two options
- Require switch module

```js
var switchModule = require("ui/switch");
```

- `propertyChange` event

```js
<Page>
  <Switch propertyChange="switchPropertyChange" />
</Page>
```

```js
function switchPropertyChange(args) {
    if (args.propertyName === "checked") {
        // Your code goes here
    }
}
exports.switchPropertyChange = switchPropertyChange;
```

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Slider
- You can use to pick a numeric value within a configurable range
- Require slider module

```js
var sliderModule = require("ui/slider");
```

- Slider properties
    - `maxValue`
    - `value`
    - `minValue`

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Progress
- Visual bar indicator of a progress in a operation
- Require progress module

```js
var progressModule = require("ui/progress");
```

- Progress properties
    - `value`
    - `maxValue`

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Activity indicator
- Visual spinner indicator which shows that a task is in progress
- Require activity indicator module

```js
var activityIndicatorModule = require("ui/activity-indicator");
```

- Shows it while image is loading

```js
var image = new imageModule.Image();
var indicator = new activityIndicatorModule.ActivityIndicator();
indicator.width = 100;
indicator.height = 100;
// Bind the busy property of the indicator to the isLoading property of the image
indicator.bind({
    sourceProperty: "isLoading",
    targetProperty: "busy"
}, image);
```

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 36px;' } -->
# Image
- Shows an image.
- You can load the image can be from ImageSource or from URL
- Require image module

```js
var imageModule = require("ui/image");
```

- There are 4 stretch modes for the image
     - `none`
    - `fill`
    - `aspectFill`
    - `aspectFit`

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Image

- Different types of `image` load in `.xml`

```xml
<Page>
  <StackLayout>
     <!--Bind the image source property to view-model property -->
     <Image src="{{ thumbnailImageUrl }}" />
     <!--Load form image from application -->
     <Image src="~/logo.png" stretch ="none" / >
     <!--Load form image resource -->
     <Image src="res://logo.png" stretch ="none" / >
     <!--Load form image URL-->
     <Image src="http://www.google.com/images/errors/logo_sm_2.png" stretch ="none" />
  </StackLayout>
</Page>
```
<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# List View
- Require list view module

```js
var listViewModule = require("ui/list-view");
```
- Shows items in a vertically scrolling list

```xml
<Page>
    <ListView items="{{ myItems }}">
    	<ListView.itemTemplate>
    		<Label text="{{ $value }}"/>
    	</ListView.itemTemplate>
    </ListView>
</Page>
```

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# HTML View

- Represents a view with html content
- Used for static web pages

- Require html view module

```js
var htmlViewModule = require("ui/html-view");
```

```xml
<Page>
     <HtmlView html="{{ htmlString }}" />
</Page>
```

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Web View

- Shows web pages

- Require web-view view module

```js
var webViewModule = require("ui/web-view");
```

```xml
<Page>
      <WebView src="{{ someUrl | pathToLocalFile | htmlString }}" />
</Page>
```

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 36px;' } -->
# Tab View

- Implements tab navigation

- Require tab-view view module

```js
var tabViewModule = require("ui/tab-view");
```

```xml
<Page>
 <TabView>
   <TabView.items>
     <TabViewItem title="Tab 1">
       <TabViewItem.view>
          <Label text="Label in Tab1" />
       </TabViewItem.view>
     </TabViewItem>
     <TabViewItem title="Tab 2">
       <TabViewItem.view>
          <Label text="Label in Tab2" />
       </TabViewItem.view>
     </TabViewItem>
   </TabView.items>
 </TabView>
</Page>
```

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 36px;' } -->
# Segmented bar

- Implement discrete selection

- Require segmented bar module

```js
var segmentedBarModule = require("ui/segmented-bar");
```

```xml
<StackLayout>
    <SegmentedBar selectedIndex="{{ selectedIndex }}">
        <SegmentedBar.items>
            <SegmentedBarItem title="First" />
            <SegmentedBarItem title="Second" />
            <SegmentedBarItem title="Third" />
        </SegmentedBar.items>
    </SegmentedBar>
</StackLayout>
```

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 36px;' } -->
# Date and time pickers

- Lets you choose a date

- Require date picker module

```js
var datePickerModule = require("ui/date-picker");
```


```xml
 <DatePicker day="11" month="2" year="2016"></DatePicker>
```

- Require time picker module

```js
var timePickerModule = require("ui/time-picker");
```

```xml
 <TimePicker hour="12" minute="00"></TimePicker>
```

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 36px;' } -->
# List picker

- You can pick value from a list

- Require date picker module

```js
var listPickerModule = require("ui/list-picker");
```


```xml
  <ListPicker items="{{ myItems }}" selectedIndex=""></ListPicker>
```

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Dialogs

- Lets you create different types of dialogs

- Require date picker module
    - `Alert`
    - `Confirm`
    - `Prompt`
    - `Login`
    - `Action`

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 36px;' } -->
# Dialogs

- Alert

```js
dialogs.alert({
  title: "Your title",
  message: "Your message",
  okButtonText: "Your button text"
}).then(function () {
  console.log("Dialog closed!");
});
```

- Confirm

```js
dialogs.confirm({
  title: "Your title",
  message: "Your message",
  okButtonText: "Your button text",
  cancelButtonText: "Cancel text",
  neutralButtonText: "Neutral text"
}).then(function (result) {
  // result argument is boolean
  console.log("Dialog result: " + result);
});
```

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Dialogs

- Prompt

```js
dialogs.prompt({
  title: "Your title",
  message: "Your message",
  okButtonText: "Your button text",
  cancelButtonText: "Cancel text",
  neutralButtonText: "Neutral text",
  defaultText: "Default text",
  inputType: dialogs.inputType.password
}).then(function (r) {
  console.log("Dialog result: " + r.result + ", text: " + r.text);
});
```

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Dialogs
- Login

```js
dialogs.login({
  title: "Your title",
  message: "Your message",
  okButtonText: "Your button text",
  cancelButtonText: "Cancel button text",
  neutralButtonText: "Neutral button text",
  userName: "User name label text",
  password: "Password label text"
}).then(function (r) {
  console.log("Dialog result: " + r.result + ", user: " + r.userName + ", pwd: " + r.password);
});
```

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Dialogs

- Action

```js
dialogs.action({
  message: "Your message",
  cancelButtonText: "Cancel text",
  actions: ["Option1", "Option2"]
}).then(function (result) {
  console.log("Dialog result: " + result)
});
```





<!-- section start -->
<!-- attr: { id:'questions', class:'slide-section',showInPresentation: true } -->
<!-- # Questions
## Mobile Applications with NativeScript -->
[link to the forum](http://telerikacademy.com/Forum/Category/70/mobile-apps-with-native-script)
