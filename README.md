# ec-tooltip

*Let's see how far we can get with creating this thing.*

ec-tooltip is the most barebones jQuery tooltip you can get your hands on.
It's very easy to use:

```
<!-- the html -->
<div class="some-container">
    <!-- obviously this can be an element with whatever class you wish, ec-tooltip ain't showing no disrespect -->
    <p class="element-with-tooltip" data-ec-text="This is a tooltip">This is an element with a tooltip.</p>
</div>
```
```
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
| containingElement | $(body) | jQuery object | Defaults to the body of our dom model |
| offsetY | -5 | int | The y offset, defaults to -5, should be obvious what it does |
| offsetX | 20 | int | The x offset, defaults to 20, should be obvious what it does |
| fade | false | bool | Should our tooltip fade out when our mouse leaves the element? |
| fadeTimer | 0 | int | This describes, in milliseconds, how long it should take for the element to disappear completely when fade is set to true |
