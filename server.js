/**
 * Static HTTP Server
 *
 * Serves files and folders from the './public' folder
 */

// modules
var static = require( 'node-static' ),
    port = 8080,
    http = require( 'http' );

// config
var file = new static.Server( './public', {
    cache: 3600,
    gzip: true
} );

// serve
http.createServer( function ( request, response ) {
    request.addListener( 'end', function () {
        file.serve( request, response );
    } ).resume();
} ).listen( port );