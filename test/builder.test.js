'use strict';

//require
var expect = require( 'chai' ).expect;
var Builder = require( '../lib/builder' );
var path = require( 'app-root-path' ).path;



describe( 'builder.js', function() {

	describe( 'create object', function(){
		
		it( 'normal operation', function() {

			var info = Builder
							.config()
							.info;
			var res = {

				'port'          : 8000,
				'name'          : 'Restify Server',
				'version'       : '1.0.0',
				'rootPath'      : path,
				'routesPath'    : path + '/routes',
				'routesOptions' : {},
				'logging'       : true
			};

			expect( info ).to.eql( res );

		});

		it( 'with params', function() {

			var data = {

				'port'    : 3000,
				'name'    : 'moses',
				'version' : '2.0.0',
				'logging' : false
			};
			
			var info = Builder
							.config( data )
							.info;
			
			var res = {

				'port'          : 3000,
				'name'          : 'moses',
				'version'       : '2.0.0',
				'rootPath'      : path,
				'routesPath'    : path + '/routes',
				'routesOptions' : {},
				'logging'       : false
			};

			expect( info ).to.eql( res );

		});

		it( 'addRoutes for object', function() {

			var data = {

				'port'    : 3000,
				'name'    : 'moses',
				'version' : '2.0.0',
				'logging' : false
			};

			var info = Builder
							.config( data )
							.routesOptions( { 'test' : 'test' } )
							.info;
			
			var res = {

				'port'          : 3000,
				'name'          : 'moses',
				'version'       : '2.0.0',
				'rootPath'      : path,
				'routesPath'    : path + '/routes',
				'routesOptions' : { 'test' : 'test' },
				'logging'       : false
			};

			expect( info ).to.eql( res );

		});

	});

});
