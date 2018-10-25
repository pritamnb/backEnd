const express = require('express');
const app = express();
var fs=require('fs');
const mysql = require('mysql');



const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'project'
});

'use strict';

var Hapi = require('hapi');

var server = new Hapi.Server({
    host:'localhost',
    port:8000
});
var io = require('socket.io')(server.listener);

io.sockets.on('connection', function (socket) {
    console.log("client connected.....");

    socket.on('insert_res', function (fName,LName) {

        console.log("data from client",fName,LName);
        socket.emit('insert_res',{ fName, LName: 'insert Res' });
        });
    
});
server.start(console.log('server has started'))