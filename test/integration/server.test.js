'use strict'

//requires
var expect = require( 'chai' ).expect;
var Builder = require( '../../lib/builder.js' );
var superagent = require( 'superagent' );

describe( 'Builder module', function( ) {

	var routes =  __dirname + '/routes';

	describe( 'server creation', function(){

		it('create a simple server', function(){

			var server = Builder
				.config({ 'routesPath' : routes, 'port' : 3000 } )
				.run();

			superagent
				.get( 'http://localhost:3000/health' )
				.end( function( err, res ){
					
					expect( res.body ).to.equal( 'Ok!' );
					server.close();

				});
		});

		it('custom config', function(){

			var server = Builder
				.config({ 'routesPath' : routes, 'port' : 3000, 'logging' : false } )
				.run();

			superagent
				.get( 'http://localhost:3000/health' )
				.end( function( err, res ){
					
					expect( res.body ).to.equal( 'Ok!' );
					server.close();

				});
		});
	});

	describe( 'server options', function(){

		it( '.add()', function(){

			var server = Builder
				.config( { 'routesPath' : routes, 'port' : 3000, 'logging' : false } )
				.add( function( server ){

					server.get( '/test', function( req, res, next ) {

						res.send( 'Moses!' );
					});

					return server;
				})
				.run();

			superagent
				.get( 'http://localhost:3000/test' )
				.end( function( err, res ){
					
					expect( res.body ).to.equal( 'Moses!' );
					server.close();

				});

		});

		it( '.routesOptions()', function(){

			var server = Builder
							.config( { 'routesPath' : routes, 'port' : 3000, 'logging' : false } )
							.routesOptions( { 'name' : 'moses' } )
							.run();

			superagent
				.get( 'http://localhost:3000/withParams' )
				.end( function( err, res ) {

					//console.log( res.body );

					expect( res ).to.eql( 'Hey! moses' );
					server.close();
				});
		});

	});

});