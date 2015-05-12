/**
 * Static HTTP Server
 *
 * Serves files and folders from the './public' folder
 */

// dependencies
var static = require( 'node-static' ),
    http   = require( 'http' ),
    fs     = require( 'fs' )
    url    = require( 'url' );

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



