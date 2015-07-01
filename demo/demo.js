var MediaQueryMatcher = require('../lib/media-query-matcher.js');

var mqMatcher = new MediaQueryMatcher({
	'phone': 'only screen and (min-width: 480px)',
	'tablet': 'only screen and (min-width: 768px)',
	'desktop': 'only screen and (min-width: 992px)',
	'large-desktop': 'only screen and (min-width: 1200px)',
	'tv': 'only screen and (min-width: 1680px)',
	'retina-2x': '(-webkit-min-device-pixel-ratio: 2),(min-resolution: 192dpi)',
	'retina-3x': '(-webkit-min-device-pixel-ratio: 3),(min-resolution: 350dpi)'
});


// Initial State

var phone = document.getElementById('phone');
var tablet = document.getElementById('tablet');
var desktop = document.getElementById('desktop');
var largeDesktop = document.getElementById('large-desktop');
var tv = document.getElementById('tv');

phone.innerHTML = mqMatcher.is('phone');
tablet.innerHTML = mqMatcher.is('tablet');
desktop.innerHTML = mqMatcher.is('desktop');
largeDesktop.innerHTML = mqMatcher.is('large-desktop');
tv.innerHTML = mqMatcher.is('tv');


// Events

var ePhone = document.getElementById('event-phone');
var eTablet = document.getElementById('event-tablet');
var eDesktop = document.getElementById('event-desktop');
var eLargeDesktop = document.getElementById('event-large-desktop');
var eTv = document.getElementById('event-tv');

mqMatcher.on('phone', function() {
	setEventElem('phone')
});

mqMatcher.on('tablet', function() {
	setEventElem('tablet')
});

mqMatcher.on('desktop', function() {
	setEventElem('desktop')
});

mqMatcher.on('large-desktop', function() {
	setEventElem('large-desktop')
});

mqMatcher.on('tv', function() {
	setEventElem('tv')
});

function setEventElem( type )
{
	ePhone.innerHTML = 'false';
	eTablet.innerHTML = 'false';
	eDesktop.innerHTML = 'false';
	eLargeDesktop.innerHTML = 'false';
	eTv.innerHTML = 'false';

	switch (type)
	{
		case 'phone': { ePhone.innerHTML = 'true'; break; }
		case 'tablet': { eTablet.innerHTML = 'true'; break; }
		case 'desktop': { eDesktop.innerHTML = 'true'; break; }
		case 'large-desktop': { eLargeDesktop.innerHTML = 'true'; break; }
		case 'tv': { eTv.innerHTML = 'true'; break; }
	}
}

// Retina (basically it's the same as any other media query)
var retina2x = document.getElementById('retina-2x');
var retina3x = document.getElementById('retina-3x');

retina2x.innerHTML = mqMatcher.is('retina-2x');
retina3x.innerHTML = mqMatcher.is('retina-3x');