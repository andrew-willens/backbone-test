/**
 * Static HTTP Server
 *
 * Serves files and folders from the './public' folder
 */

// modules
var static = require( 'node-static' ),
    http   = require( 'http' ),
    fs     = require( 'fs' );

// config
var port       = 8080,
    fileServer = new static.Server( './public', {
        cache: 3600,
        gzip: true
    });

// serve
http.createServer( function ( request, response ) {
    
    request.addListener( 'end', function () {
        fileServer.serve( request, response );
    }).resume();

}).listen( port );



