'use strict'

var options = {};

//say hello with params
function sayHello( req, res, next ) {

	res.send( 'Hey! ' + options.name );
}

//initalize the functions
function init( server, routeOptions ) {

	options = routeOptions;

	server.get( '/withParams', sayHello );
}

module.exports = {

	init: init
}

