# jquery.fancyspinbox

This lightweight jQuery plugin turns a select dropdown into a spinbox with up and down arrows (and an optional dropdown menu), a simple flat design and items sliding into view as you select them.
It uses CSS transitions with a jQuery fallback and is accessible to keyboards and screen readers.

You can see a [demo here](http://mayakokits.github.io/jquery.fancyspinbox).

This plugin is under development. A To Do list might include:
- a `remove()` function
- support for disabled options
- a dropdown scrollbar in case of many options or limited height

## Install

As you might have guessed, this depends on jQuery. Apart from that, all you need is `jquery.fancyspinbox.js` and the styles in `jquery.fancyspinbox.css`. If you want to style the Spinbox, I recommend tweaking the Sass file.

### Install with Bower

```
$ bower install jquery.fancyspinbox
```

## Usage

The markup you need looks familiar:

```html
<select id="my-menu">
	<option value="apples">Apples</option>
	<option value="bananas" selected>Bananas</option>
	<option value="chocolate">Chocolate</option>
</select>
```

On clients without Javascript enabled, it will gracelessly degrade to an unstyled generic select field.

You initialize the plugin like this:

```javascript
var myMenu = $('#my-menu').fancyspinbox();
```

This returns the original select element which will stay in the DOM and which you can refer to as usual:

```javascript
myMenu.on('change', function(){
		console.log('You choose option nr. ' + this.selectedIndex + ' which has the value "' + this.value + '"');
	});
```

If you want to programatically change the selected Index, you should use the methods on the plugin object:

```javascript
myMenu.data('fancyspinbox').select(1);   // Select the second item in the list
```

You can also give it a spin:

```javascript
// Those return the new selected index and `false` if it's the end of the list.
myMenu.data('fancyspinbox').up();
myMenu.data('fancyspinbox').down();
```

The `add()` method lets you add items dynamically. The `value` argument is optional.

```javascript
myMenu.data('fancyspinbox').add('text', 'value');
```

If you need to access the spinbox element, use the `element` object.

```javascript
myMenu.data('fancyspinbox').element.css({'border-color': 'red'});
```

## HTML in items

Unlike standard `<option>` options, fancyspinbox options can contain HTML. Just set a `data-text` attribute.

```html
<select id="my-menu">
	<option value="apples" data-text="some <strong>really tasty</strong> apples">some really tasty apples</option>
	<option value="bananas">Bananas</option>
	<option value="chocolate">Chocolate</option>
</select>
```

## Options

You can pass options as you initialize the plugin:

```javascript
$('#my-menu').fancyspinbox({
	cycle: true,
	items: [
			{value: 'grapes', text: 'Sweet grapes'},
			{value: 'potatoes', text: '<strong>Hot</strong> potatoes'}
		]
	});
```

Here is a list of the options available:

| Property | Default value | Description |
| :------- | :------------ | :---------- |
| `items` | `[]` | An array of items to add to the list on initialisation. Items can be strings or objects like `{'value': 'foo', 'text': 'bar'}` |
| `spinButtons` | `true` | Display spin buttons. |
| `dropdownButton` | `false` | Display a dropdown button. Overrides the `spinButtons` option and sets `dropdown` to true. |
| `dropdown` | `true` | Display the dropdown. | 
| `cycle` | `false` | Cycle through the items, don't stop at the end of the list. |
| `scroll` | `true` | Animate the spinbox. |
| `scrollDuration` | `300` | Duration of the scroll transition. |
| `flipSpinDirection` | `false` | Flip the spin button's direction. |
| `focusOnSpin` | `false` | Give the focus to the spinbox if a spin button is clicked. |

 
	
