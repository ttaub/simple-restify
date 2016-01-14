![alt tag](https://github.com/ttaub/simple-restify/blob/master/simple-restify.png?raw=true)

Hassle free server creation. No point in recreating the same thing when we can have one standard server. 

### What is this repository for? ###

* Creating Restify servers.

### How do I get set up? ###

Everything is created using the builder object. In order to use the builder object you should require common-server:

     var Builder = require( 'simple-restify' );

The Builder object has 3 functions:

     var server = Builder
                   .config( config ) //add the server configurations from a json object
                   .routesOptions( options ) //accepts json object that will be passed into all the routes
                   .add( function( server ){  //allows you to add your own custom functions which need server

                         return server; 

                       })
                   .run(); //runs the server and returns the server json object

The config json has the following properties you can add:

          {
              "port" : 8000,
              "name" : "sample-server",
              "version" : 1.0.0,
              "logging" : true,
              "rootPath" : "/users/test",
              "routesPath" : "/users/test/routes/"
          }
