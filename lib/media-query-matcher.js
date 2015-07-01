/**
 * Detect if a media query is applied on the document.
 *
 * @param mqAliases
 * @constructor
 */
function MediaQueryMatcher( mqAliases )
{
	/**
	 * Holds the alias -> media query options.
	 *
	 * @type {*|{}}
	 * @private
	 */
	var _mqAliases = mqAliases || {};


	/**
	 * Detect if the media query is applied.
	 *
	 * @param mqAlias
	 */
	this.is = function( mqAlias )
	{
		return window.matchMedia(_mqAliases[mqAlias]).matches;
	};


	/**
	 * Trigger callback function if the specified media query is applied.
	 *
	 * @param mqAlias
	 * @param callback
	 */
	this.on = function( mqAlias, callback )
	{
		if ( typeof callback === 'function' )
		{
			var mq = window.matchMedia(_mqAliases[mqAlias]);
			mq.addListener(callback);
		}
	};
}

module.exports = MediaQueryMatcher;