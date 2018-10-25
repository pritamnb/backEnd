const express = require('express');
const app = express();
var fs=require('fs');
//var app1 = require('http').createServer(handler)

const mysql = require('mysql');

var http = require('http');
var loki=require('lokijs');
//var db = new loki('loki.json');
//var table1=db.addCollection('table1');
//create a server object:
var cnt=0;
/*http.createServer(function (req, res) {
	
	
	console.log("req==>>",req);
	table1.insert({data:'Attempt '+cnt,date:new Date()}); 
	1
	db.saveDatabase();
  res.write(JSON.stringify(table1.data)); //write a response to the client
  res.end(); //end the response
  cnt++;
  
  
  
}).listen(8080); //the server object listens */
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

io.on('connection', function (socket) {
console.log("client connected.....");

    socket.on('insert_res', function (fName,LName) {

        console.log("data from client",fName,LName);
        socket.emit('insert_res',{ fName, LName: 'insert Res' });
    });
	// socket.on('update', function () {
    //     socket.emit('msg','Excuse you!');
    // });
	// socket.on('delete', function () {
    //     socket.emit('msg','Excuse you!');
    // });
	// socket.on('fetch', function () {
    //     socket.emit('msg','Excuse you!');
    // });




    //db testing 
      
     function handler(req, res) {
        fs.readFile(__dirname + '../Project/PROJECT/Q/src/app/Components/login/login.component.html',
        function (err, data) {
          if (err) {
            res.writeHead(500);
            return res.end('Error loading html file ');
          }
  
          res.writeHead(200);
          res.end(data);
        });
      }
  
  

// });

//io.sockets.on('connection', function (socket) {
    io.socket.on('login', function(usr, pass){
        var TEST_DATABASE = 'project';
        var TEST_TABLE = 'login';
        console.log(usr,pass);
        db.query('USE '+TEST_DATABASE);

        // db.query('SELECT name FROM '+TEST_TABLE+' WHERE user = "'+usr+'" AND password = "'+pass+'"', function(err, results) {
        //   if (err) throw err;
        //   console.log(results[0]); // [{1: 1}]
        //   socket.emit('retuLogIn',results[0]['name']);
          

        });
        // const usr='pritam'
        // const pass='1234'
        // db.query('SELECT  name,password FROM login where user='+usr+' and password='+pass+'', (usr,pass) => {
        //     //if(err) throw err;
  
        //      console.log('Data received from Db:\n');
        //      console.log(usr,pass);
        //      });
    //});
    socket.on('disconnect', function(){
        console.log('Server has disconnected');
    });



});

// db.query('SELECT * FROM login', (err,row) => {
//      if(err) throw err;
  
//     console.log('Data received from Db:\n');
//     console.log(row);
  //});

//23/10/18

// Connect db
db.connect((err) => {
    //  if(err){
    //      throw err;
    // }
    console.log('Mysql connected'); 
});

// });
// const startup = async () => {
//     await server.register([{
//         plugin: require('lokijs-plugin'),
//         options: {
//             env: 'NODEJS' 
//         }
//     }]);
//     await server.start();
// };
 
// startup().catch((err) => {
//     throw err;
 
 
// console.log(`${new Date()}: server running at ${server.info.uri}`);
 
server.start(console.log('Server started'));
//db.end(console.log('exited from database'));
/*
const startup = async () => {
    await server.register([{
        plugin: require('lokijs-plugin'),
        options: {
            env: 'NODEJS' 
        }
    }]);
    await server.start();
};
 
startup().catch((err) => {
    throw err;
});
 
console.log(`${new Date()}: server running at ${server.info.uri}`);
*/
