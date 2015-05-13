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
    // console.log(req.url);
    switch (req.url) {
        case "/save":
            convenience.saveItem(req, res);
            break;

        case "/enums":
            convenience.getEnums(req, res);
            break;

        case "/item":
            convenience.getItem(req,res);
            break;

        default: 
            convenience.getFile(req, res);
            break;
    }

}).listen( port );

// router functions (emulates database calls)
var convenience = {
    getFile: function(req, res) {
        console.log('getting ' + req.url);
        req.addListener( 'end', function () {
            fileServer.serve( req, res );
        }).resume();  
    },

    getItem: function(req, res) {
        console.log('getting item');
        var item = fs.readFileSync('./mock-db/item.json').toString();
        this.respond(item, req, res);
    },

    getEnums: function(req, res) {
        console.log("saving item");
        var enums = fs.readFileSync('./mock-db/enums.json').toString();
        this.respond(enums, req, res);
    },

    saveItem: function(req, res) {
        console.log('saving item');
        req.on('data', function(query) {
            var urlObj = qs.parse( query.toString() );
            var currentItem = JSON.parse( 
                fs.readFileSync('./mock-db/item.json').toString()
            );

            for (var param in urlObj) {
                console.log(param +": "+ urlObj[params]);
                currentItem[param] = urlObj[param];
            }

            // save updated item
            fs.writeFileSync('./mock-db/item.json', JSON.stringify(currentItem) );

            // send updated item to client
            var body = fs.readFileSync('./mock-db/item.json').toString();
            this.respond(body, req, res);
        });
    },

    respond: function(body, req, res) {
        res.writeHead(200,{'Content-Length': body.length, 'Content-Type': 'application/json'});
        res.write(body);
        res.end();
    }
}



