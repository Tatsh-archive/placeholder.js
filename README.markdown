placeholder.js — bring HTML 5 placeholder attribute to all browsers
===================================================================

Forked version, which is maintained and does not require jQuery nor adds any support to jQuery.

The placeholder attribute is the part of [HTML5 specification](http://www.whatwg.org/specs/web-apps/current-work/multipage/common-input-element-attributes.html#attr-input-placeholder).
Currently, it works only in WebKit-based browsers, like Google Chrome and Safari.
Placeholder.js fixes it!

Tested on IE 7-9 and Firefox 3.6.

To use: `inputPlaceholder(document.getElementById('some_input'), "#AAA")`

## Limitations
placeholder.js doesn't work with `<input type='password'>` yet.
