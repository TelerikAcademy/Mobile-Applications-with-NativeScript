<!-- section start -->
<!-- attr: { id:'title', class:'slide-title', hasScriptWrapper:true } -->
# Layouts
## Telerik NativeScript

<div class="signature">
    <p class="signature-course">Mobile Applications with NativeScript</p>
    <p class="signature-initiative">Telerik Software Academy</p>
    <a href="http://academy.telerik.com" class="signature-link">http://academy.telerik.com</a>
</div>

<!-- section start -->
<!-- attr: { id:'table-of-contents' } -->
# Table of Contents
-  Layout process
    - Measure pass
    - Layout pass
    - Alignment
    - Margins
    - Paddings
- Layouts
    - Predefined layouts


<!-- section start -->
<!-- attr: { class:'slide-section', id:'coming-next', showInPresentation: true } -->
<!-- # Layout process -->

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Layout process

- Process of measuring and positioning the child views of a Layout container
- Layout is an intensive process
- The speed and performance depend on the count of the children and the complexity of the layout container

- Layout completes in two passes
    - measure pass
    - layout pass
- Every layout container provides its own onMeasure() and onLayout()

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Measure pass

- In the measure pass, each View is measured to retrieve its desired size
- The measure pass evaluates the following properties
    - width
    - height
    - minWidth
    - minHeight
    - visibility
    - marginTop
    - marginRight
    - marginBotton
    - marginLeft

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Layout pass

- During the layout pass, each View is placed in a specific layout slot
- This slot is determined by the desired size of the view (retrieved from the measure pass) and the following properties:
    - marginTop
    - marginRight
    - marginBottom
    - marginLeft
    - horizontalAlignment
    - verticalAlignment

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 34px;' } -->
# Alignment

- Layout applies horizontal and vertical alignment only when an element is allocated more size than it needs

- Horizontal alignment

| Member  | Description                                                                                         |
|:--------|:----------------------------------------------------------------------------------------------------|
|  left   | The view is aligned to the left of the layout slot of the parent element.                           |
|  center | The view is aligned to the center of the layout slot of the parent element.                         |
|  right  | The view is aligned to the right of the layout slot of the parent element.                          |
| stretch |	The view is stretched to fill the layout slot of the parent element. width takes precedence, if set.|

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 36px;' } -->
# Alignment

- Vertical alignment

| Member  | Description                                                                                            |
|:--------|:-------------------------------------------------------------------------------------------------------|
| top     | The view is aligned to the top of the layout slot of the parent element.                               |
| center  | The view is aligned to the center of the layout slot of the parent element.                            |
| bottom  | The view is aligned to the bottom of the layout slot of the parent element.                            |
| stretch | The view is stretched to fill the layout slot of the parent element. height takes precedence, if set.  |

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Margins and Paddings
- `Margins` -  describe the distance between a view and its parent
- `Paddings` - describe the distance between the layout container and its children
- The four margin properties:
    - `marginTop [paddingTop]`
    - `marginRight [paddingRight]`
    - `marginBottom [paddingBottom]`
    - `marginLeft [paddingLeft]`

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Margins and Paddings

- Through XML, you can choose between the following approaches

    - `Set one value`: For all the sides
    - `Set two values`: Starting from the top clockwise <br /> `[first] [second] [first] [second]`
    - `Set four values`: Startin from the top clockwise <br /> `[first] [second] [third] [fourth]`


<!-- section start -->
<!-- attr: { class:'slide-section', showInPresentation: true } -->
<!-- # Layouts-->

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 38px;' } -->
# Layouts

- Layout is the base class for all views
- Provides positioning of child elements
- You can use the various layout containers to position elements
- They evaluate the base properties of View such as width, height, minWidth and alignments, and expose additional properties for positioning child views (such as the four paddings)

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 38px;' } -->
# Predefined Layouts

- There are 5 types of predefined layouts
    - **AbsoluteLayout**
    - **DockLayout**
    - **GridLayout**
    - **StackLayout**
    - **WrapLayout**

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 38px;' } -->
# Absolute Layout

- The `AbsoluteLayout` us the simplest layout in NativeScript
- It uses absolute left-top coordinates to position its children
- The `AbsoluteLayout` will not enforce any layout constraints on its children and will not resize them at runtime when its size changes

    - **left** - distance, in pixels, between the left edge of the child and the left edge of its parent container
    - **top** - distance, in pixels, between the top edge of the child and the top edge of its parent container

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Dock Layout

- The `DockLayout` is a layout that provides an docking mechanism
- Child could be docked to the `left`, `right`, `top`, `bottom` or center of the layout
- To define the docking side of a child element, use its `dock` property

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Dock Layout
- To dock a child element to the center of the `DockLayout`, it must be the last child of the `DockLayout` and the `stretchLastChild` property of the `DockLayout` must be set to true

    - **stretchLastChild** -  indicates whether the last child element within a `DockLayout` stretches to fill the remaining available space
    - **dock** - position of a child element that is inside a `DockLayout`

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 38px;' } -->
# Grid Layout
- The `GridLayout` is a layout that arranges its child elements in a table structure of rows and columns
- A cell can contain multiple child elements, they can span over multiple rows and columns, and even overlap each other.
- The GridLayout has one column and one row by default.
- To add additional columns and rows, you have to specify column definition items
-  The width of a column and the height of a row can be specified in three ways
    - **Absolute** - fixed size of pixels
    - **Star** `(*)` - takes as much space as available
    - **Auto** - takes as much space as needed

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Grid Layout
- Properties
    - **columns** - width of the columns
    - **rows** - height of the rows
    - **col**
    - **row**
    - **rowSpan**
    - **colSpan**

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Stack Layout
- The StackLayout stacks its child elements below or beside each other
- It is very useful to create any kinds of lists
    - the `orientation` property specifies the stack direction

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Wrap Layout
- The WrapLayout is similar to the StackLayout
- Wraps the childs to new columns/rows if no space is left
- The WrapLayout is often used with items of the same size
    - **orientation**
    - **itemWidth**
    - **itemHeight**

<!-- section start -->
<!-- attr: { id:'questions', class:'slide-section',showInPresentation: true } -->
<!-- # Questions
## Mobile Applications with NativeScript -->
[link to the forum](http://telerikacademy.com/Forum/Category/70/mobile-apps-with-native-script)
