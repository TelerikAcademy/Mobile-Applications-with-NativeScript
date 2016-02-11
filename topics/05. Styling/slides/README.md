<!-- section start -->
<!-- attr: { id:'title', class:'slide-title', hasScriptWrapper:true } -->
# Styling
## Telerik NativeScript

<div class="signature">
    <p class="signature-course">Mobile Applications with NativeScript</p>
    <p class="signature-initiative">Telerik Software Academy</p>
    <a href="http://academy.telerik.com" class="signature-link">http://academy.telerik.com</a>
</div>

<!-- section start -->
<!-- attr: { id:'table-of-contents' } -->
# Table of Contents
-  Introduction
-  Applying CSS Styles
-  Supported Selectors
-  Supported Properties
-  Using Fonts
-  Import External CSS


<!-- section start -->
<!-- attr: { class:'slide-section', showInPresentation: true } -->
<!-- # Introduction -->

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Introduction
- You change the looks and appearance of views (elements) in NativeScript with CSS
- Or changing the style object of the elements in JavaScript
- Only a subset of the CSS language is supported.
- Each View instance exposes a style property, which holds all the style properties for the view

<!-- section start -->
<!-- attr: { class:'slide-section', showInPresentation: true } -->
<!-- # Applying CSS Styles -->

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Applying CSS Styles

- Application wide CSS
    - applies to every application page
- When the app starts, NativeScript checks for the **app.css** file if such exists and loads the styles

```js
var application = require("application");
application.mainModule = "main-page";
application.cssFile = "style.css";
application.start();
```

- The path to the CSS file is relative to the application root folder

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Applying CSS Styles

- Page specific CSS
    - applies to the page's UI views
- When the `.xml` page is loaded, NativeScript looks for a CSS file with the same name if such exists and loads the styles

```js
var application = require("application");
application.mainModule = "main-page";
application.cssFile = "style.css";
application.start();
```

- The path to the CSS file is relative to the application root folder

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Applying CSS Styles

- After the CSS is applied there are two ways to add more properties

    - Add CSS from a string

    ```js
    page.addCss("button {background-color: blue}");
    ```

    - Add CSS from a file

    ```js
    page.addCssFile(cssFileName);
    ```
- The path to the CSS file is relative to the application root folder

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Applying CSS Styles

- There is a way to apply CSS styles using inline CSS in the `.xml` file

```xml
<Button text="inline style" style="background-color: green;"/>
```

- The whole page CSS could be replaced

```js
page.css = "button { color: red }";
```

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Import External CSS

- External CSS could be imported from local file, url, or resource

- According to documentation
```css
@import { url('http://some-domain.com/your-style.css') }
@import { url('res://your-style.css') }
@import { url('~/your-style.css') }
```
- Tested and working
```css
@import '~/your-style.css';
```

<!-- section start -->
<!-- attr: { class:'slide-section', showInPresentation: true } -->
<!-- # Supported selectors and styles -->

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Currently supported CSS Selectors

- Currently NativeScript supports only three CSS Selectors

    - Type selector

    ```css
    button { background-color: gray }
    ```

    - Class selector

    ```css
    .title { font-size: 32 }
    ```

    - ID Selector

    ```css
    #login-button { background-color: blue }
    ```

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Currently supported CSS Properties

|**CSS**              |       **Property**	    |
|:--------------------|:------------------------|
|color	              |    color	            |
|background-color	  |    backgroundColor	    |
|background-image	  |    backgroundImage	    |
|background-repeat	  |    backgroundRepeat	    |
|background-position  |	   backgroundPosition   |
|background-size	  |    backgroundSize	    |
|border-color	      |    borderColor	        |
|border-width	      |    borderWidth	        |

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Currently supported CSS Properties

|**CSS**              |       **Property**	    |
|:--------------------|:------------------------|
|border-radius	      |    borderRadius	        |
|font	              |    font	                |
|font-family	      |    fontFamily           |
|font-size	          |    fontSize	            |
|font-style	          |    fontStyle	        |
|font-weight	      |    fontWeight           |
|text-align	          |    textAlignment	    |
|vertical-align	      |    verticalAlignment    |

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Currently supported CSS Properties
|**CSS**              |       **Property**	    |
|:--------------------|:------------------------|
|horizontal-align	  |    horizontalAlignment	|
|margin		          |    margin               |
|margin-top	          |    marginTop	        |
|margin-right	      |    marginRight	        |
|margin-bottom	      |    marginBottom         |
|margin-left	      |    marginLeft	        |
|width	              |    width	            |
|height	              |    height	            |


<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Currently supported CSS Properties

|**CSS**              |       **Property**	    |
|:--------------------|:------------------------|
|min-width            |    minWidth	            |
|min-height	          |    minHeight	        |
|padding	          |    padding	Sets        |
|padding-top          |	   paddingTop	        |
|padding-right	      |    paddingRight	        |
|padding-bottom	      |    paddingBottom	    |
|padding-left	      |    paddingLeft	        |
|visibility	          |    visibility	        |
|opacity	          |    opacity	            |


<!-- section start -->
<!-- attr: {  class:'slide-section',showInPresentation: true } -->
<!-- # Fonts -->


<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Fonts

- The font-family property can hold several values
    - serif (ex. Times New Roman)
    - sans-serif (ex. Helvetica)
    - monospace (ex. Courier New)


<!-- section start -->
<!-- attr: { id:'questions', class:'slide-section',showInPresentation: true } -->
<!-- # Questions
## Mobile Applications with NativeScript -->
[link to the forum](http://telerikacademy.com/Forum/Category/70/mobile-apps-with-native-script)
