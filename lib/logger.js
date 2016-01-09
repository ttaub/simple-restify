/**
 * Logging module.
 *
 * @module lib/logger
 */

'use strict';

var bunyan = require( 'bunyan' );

var restify = require( 'restify' );

var commonLogging = require( 'common-logging' );

var logger = bunyan.createLogger({
  name: 'jeeko',
  streams: [
    {
      level: 'debug',
      stream: process.stdout            // log INFO and above to stdout
    }
    // ,{
    //   level: 'error',
    //   path: '/var/tmp/jeeko.log'  // log ERROR and above to a file
    // }
  ],
  serializers: commonLogging.updateSerializers( restify.bunyan.serializers )
});

module.exports = logger;