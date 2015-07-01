Use the MatchMedia API to detect is a specific media query applies on the page.

## Browser Support

* IE 10+
* Firefox
* Chrome
* Safari

## Installation

```sh
npm install media-query-matcher --save
```

## Example

```js
var MediaQueryMatcher = require('media-query-matcher');

var mqMatcher = new MediaQueryMatcher({
	'phone': 'only screen and (min-width: 480px)',
	'tablet': 'only screen and (min-width: 768px)'
});

console.log('phone: ', mqMatcher.is('phone') );
console.log('tablet: ', mqMatcher.is('tablet') );

mqMatcher.on('phone', function() {
	console.log('on phone: true');
});

mqMatcher.on('tablet', function() {
	console.log('on tablet: true');
});
```

A more comprehensive example is available by running:

```sh
npm run demo
```