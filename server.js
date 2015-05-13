/**
 * Static HTTP Server
 *
 * Serves files and folders from the './public' folder
 */

// dependencies
var static = require( 'node-static' ),
    http   = require( 'http' ),
    fs     = require( 'fs' ),
    url    = require( 'url' ),
    qs     = require( 'querystring' );

// config
var port       = 8080,
    fileServer = new static.Server( './public', {
        cache: 3600,
        gzip: true
    });

// serve
http.createServer( function ( req, res ) {
    var reqNote = req.method + " request " + new Date() + " : " + req.url + "\n";
    fs.appendFile('requestLog.txt', reqNote);

    switch (req.url) {
        case "/save":
            saveItem(req, res);
            break;

        case "/enums":
            getEnums();
            break;

        case "/item":
            getItem(req,res);
            break;

        default: 
            req.addListener( 'end', function () {
                fileServer.serve( req, res );
            }).resume();
            break;
    }

}).listen( port );

function getItem(req, res) {

}

function saveItem(req, res) {
    req.on('data', function(query) {
        var currentItem = JSON.parse( 
            fs.readFileSync('./mock-db/item.json').toString() 
        );
        var urlObj = qs.parse( query.toString() );

        for (var param in urlObj) {
            currentItem[param] = urlObj[param];
        }

        // save updated item
        fs.writeFileSync('./mock-db/item.json', JSON.stringify(currentItem) );

        // send updated item to client
        var body = fs.readFileSync('./mock-db/item.json').toString();
        
        res.writeHead(
            200,
            {
                'Content-Length': body.length,
                'Content-Type': 'application/json'
            }
        );
        res.write(body);
        res.end();
    });
}



