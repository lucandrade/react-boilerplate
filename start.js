'use strict';

var connect  = require('connect');
var serverStatic = require('serve-static');
var server = connect();
var livereload = require('livereload');

server.use(serverStatic(__dirname + '/server'));
server.listen(3000);
server = livereload.createServer();
server.watch(__dirname + "/server");
