# ec-tooltip

*Let's see how far we can get with creating this thing.*

ec-tooltip is the most barebones jQuery tooltip you can get your hands on.
It's very easy to use:

# Install
From bower:
`bower install ec-tooltip`

Or download the jquery.ecTooltip.js file and include it in your html document

`<script src="/path/to/jquery.ecTooltip.js" type="text/javascript"></script>`

# Usage
```html
<!-- the html -->
<div class="some-container">
    <!-- obviously this can be an element with whatever class you wish, ec-tooltip ain't showing no disrespect -->
    <p class="element-with-tooltip" data-ec-text="This is a tooltip">This is an element with a tooltip.</p>
</div>
```
```javascript
// the initialization
$(document).ready(function () {
    var options = {};

    $('.element-with-tooltip').ecTooltip(options);
});
```
# Options
You can pass some basic options:

| Option | Default Value | Data type | Explanation |
| --- | --- | --- | --- |
| tooltipMarkup | `<div class="ec-tooltip-container" style="position: absolute; display: none;"></div>` | string | Used for defining the actual tooltip markup |
| containingElement | `body` | string | Defaults to the body of our dom model |
| offsetY | -5 | int | The y offset, defaults to -5. The default is a little bit above the mouse pointer, since I use the css rule `top` to define the tooltip's position |
| offsetX | 20 | int | The x offset, defaults to 20. It's how far from the left of the mouse pointer the tooltip should appear |
| fade | false | bool | Should our tooltip fade out when our mouse leaves the element? |
| fadeTimer | 0 | int | This describes, in milliseconds, how long it should take for the element to disappear completely when fade is set to true |
