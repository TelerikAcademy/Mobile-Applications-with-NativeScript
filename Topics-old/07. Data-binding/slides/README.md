<!-- section start -->
<!-- attr: { id:'title', class:'slide-title', hasScriptWrapper:true } -->
# Mobile Applications with NativeScript
## Data Binding

<div class="signature">
    <p class="signature-course">Mobile Applications with NativeScript</p>
    <p class="signature-initiative">Telerik Software Academy</p>
    <a href="http://academy.telerik.com" class="signature-link">http://academy.telerik.com</a>
</div>

<!-- section start -->
<!-- attr: { id:'table-of-contents', style:'font-size:38px' } -->
# Table of Contents
- Data Flow Direction
- Basic Binding Concepts
- How to Create a Binding
  - Two-Way Binding in Code
  - Binding in XML
- Binding Source
  - Binding to a Property
  - Binding to an Event in XML
  - Binding to a Plain Object
  - Binding to a Parent Binding Context
- Using Expressions for Bindings
- Using Converters in Bindings
- Stop Binding

<!-- section start -->
<!-- attr: { class:'slide-section', showInPresentation:true } -->
# Data Flow Direction
- **One-Way**
  - Ensures that the target property updates
  - UI modifications will not update the code
- **Two-Way**
  - Ensures reflection of changes in both directions

<!-- section start -->
<!-- attr: { class:'slide-section', showInPresentation:true } -->
# Creating a binding
## Observable class

<!-- attr: {} -->
# Two-Way Binding in Code
- `data/observable` is used for the **source** side

```js
var observableModule = require("data/observable");
var source = new observableModule.Observable();
source.textSource = "Text set via twoWay binding";
```

<!-- attr: { hasScriptWrapper:true } -->
# Binding in XML
- `{{ }}` are used for the **target** side

```xml
<Page>
  <StackLayout>
    <TextField text="{{ textSource }}" />
  </StackLayout>
</Page>
```

<!-- section start -->
<!-- attr: { class:'slide-section', showInPresentation:true } -->
# Binding source
## Attaching to the target

<!-- attr: { hasScriptWrapper:true } -->
# Binding to a Property
- `Observable` class can be bound by setting its `bindingContext` property
  - to the page
  - to the layout (`StackLayout`)

```js
funtion pageLoaded(args) {
  var page = args.object;
  page.bindingContext = source;
}
```

<!-- attr: { hasScriptWrapper:true } -->
# Binding to an Event in XML

```xml
<Page>
  <StackLayout>
    <Button text="Test Button For Binding"
          tap="{{ onTap }}" />
  </StackLayout>
</Page>
```

<!-- attr: { hasScriptWrapper:true } -->
# Binding to a Plain Object

```xml
<Page>
  <StackLayout>
    <Label text="{{ title }}" class="title" />
    <Label text="{{ message }}" />
  </StackLayout>
</Page>
```

<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Binding to a Plain Object -->
- Arrays and objects can also be bound

```xml
<Page>
  <StackLayout>
    <ListView items="{{ items }}" height="200">
      <ListView.itemTemplate>
        <Label text="{{ $value }}" />
      </ListView.itemTemplate>
    </ListView>
  </StackLayout>
</Page>
```

<!-- section start -->
<!-- attr: { class:'slide-section' } -->
# Using Expressions for Binding

<!-- attr: { showInPresentation:true } -->
<!-- # Using Expressions for Binding -->
- Some javascript expressions are supported inside `{{ }}`
  - property access
  - array access
  - operators - unary, binary, logical, comparison, ternary
  - function calls
  - filters

<!-- section start -->
<!-- attr: { class:'slide-section' } -->
# Stop Binding

<!-- attr: { showInPresentation:true } -->
<!-- # Stop Binding -->
- The need to stop a binding is rare
  - But it may be needed

```js
targetTextField.unbind("text");
```

<!-- section start -->
<!-- attr: { id:'questions', class:'slide-section', showInPresentation:true } -->
# Questions
## Mobile Applications with NativeScript
