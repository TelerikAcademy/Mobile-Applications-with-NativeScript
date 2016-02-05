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

- One-Way
- Two-Way

<!-- section start -->
<!-- attr: { class:'slide-section', showInPresentation:true } -->
# Creating a binding
## Subtitle

<!-- attr: {} -->
# Two-Way Binding in Code
```js
var observableModule = require("data/observable");
var source = new observableModule.Observable();
source.textSource = "Text set via twoWay binding";
```

<!-- attr: {} -->
# Binding in XML
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
## Subtitle

<!-- attr: {} -->
# Binding to a Property
- Bullet

<!-- attr: {} -->
# Binding to an Event in XML
- Bullet

<!-- attr: {} -->
# Binding to a Plain Object
- Bullet

<!-- attr: {} -->
# Binding to a Parent Binding Context
- Bullet

<!-- section start -->
<!-- attr: { id:'questions', class:'slide-section', showInPresentation:true } -->
# Questions
## Mobile Applications with NativeScript
