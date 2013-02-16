var app,
    http = require('http'),
    express = require('express'),
    server;

app = express();

app.configure(function() {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.static(__dirname + '/static'));
    app.use(require('connect-assets')());
});

module.exports = app;

server = http.createServer(app);

server.listen(process.env.PORT, function (err) {
    var address;

    if (err) {
        console.error(err);
    } else {
        address = server.address();
        console.log('Started on http://' + address.address + ':' + address.port);
    }
});

app.get('/', function(req, res) {
    res.render('index');
});
