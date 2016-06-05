//ae node server example.

var fs = require('fs');

var server = require('http').createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    var output = 'Hello';
    res.end(output);
}).listen(8000);

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {

    socket.on('eventMessage', function(messageItems) {
        console.log(messageItems);
    });

    socket.on('addComp', function(data) {
        var cs = new CSInterface();
        var name = data.name;
        var w = data.width;
        var h = data.height;
        cs.evalScript("app.project.items.addComp('" + name + "', \
            " + w + ", \
            " + h + ", \
             1, \
             24, \
             1 \
           );");
        io.sockets.emit('publish', data)
    });

    socket.on('addFolder', function(data) {
        var cs = new CSInterface();
        var name = data.name;
        cs.evalScript('addFolder("'+name+'")');
        io.sockets.emit('publish', data)
    });
});
