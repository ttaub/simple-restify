'use strict'

function health( req, res, next ) {

	res.send( 'Ok!' );

	next( false );
}

function init( server ) {

	server.get( '/health', health );
}

module.exports = {

	init : init
};