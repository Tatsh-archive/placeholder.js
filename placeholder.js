/**
 * Adds placeholder support to older browsers. Does not support password fields
 *   yet.
 * @param {Element} input Input or textarea element.
 * @param {string} [color='#aaa'] Color string. Recommend hash format unless
 *   detecting if the browser has support for rgb/rgba/hsl/hsla/other.
 * @return {Element} The element passed in.
 * @license License: http://www.opensource.org/licenses/mit-license.php
 */
var inputPlaceholder = function (input, color) {
	/**
	 * Tested with:
	 * - IE 7
	 * - IE 8
	 * - IE 9
	 * - Firefox 3.6
	 */
	
	// No support for password yet
	var type = input.getAttribute('type');
	if (type !== null && type.toLowerCase() === 'password') {
		return input;
	}

	// Do nothing if placeholder supported by the browser (Webkit, Firefox 3.7)
	if (input.placeholder && 'placeholder' in document.createElement(input.tagName)) {
		return input;
	}
	
	if (color === undefined) {
		color = '#aaa';
	}
	
	var defaultColor = input.style.color;
	var placeholder = input.getAttribute('placeholder');
	var addEvent = 'addEventListener';
	var event = 'focus';
	var blurEvent = 'blur';
	var submitEvent = 'submit';

	if (input.value === '' || input.value == placeholder) {
		input.value = placeholder;
		input.style.color = color;
		input.setAttribute('data-placeholder-visible', true);
	}
	
	if (input.attachEvent) {
		addEvent = 'attachEvent';
		event = 'onfocus';
		blurEvent = 'onblur';
		submitEvent = 'onsubmit';
	}
	
	input[addEvent](event, function() {
		input.style.color = defaultColor;
	 
		if (input.getAttribute('data-placeholder-visible')) {
			input.removeAttribute('data-placeholder-visible');
			input.value = '';
	  }
	}, false);

	input[addEvent](blurEvent, function() {
		if (input.value === '') {
			input.setAttribute('data-placeholder-visible', true);
			input.value = placeholder;
			input.style.color = color;
		} else {
			input.style.color = defaultColor;
			input.removeAttribute('data-placeholder-visible');
		}
	}, false);

	if (input.form) {
		input.form[addEvent](submitEvent, function() {
			if (input.getAttribute('data-placeholder-visible')) {
				input.value = '';
			}
		}, false);
	}

	return input;
};
