var express = require('express');
var app = express();
var sqlite3 = require('sqlite3').verbose();
var basicAuth = require('express-basic-auth')

            app.use(basicAuth({
    users: {'Abdo': '123456'}}))
app.get('/tracks', function (req, res){  
var file = "chinook.db";  
var db = new sqlite3.Database(file);  
db.all("SELECT trackid, name, composer, unitprice FROM tracks", function(err, rows) {  
        rows.forEach(function (row) {  
		console.log(row);  
		
	    })  
	    res.end(JSON.stringify(rows));
	    });   
db.close(); 
    });
var server = app.listen(8081, function (){
	var host = server.address().address
	var port = server.address().port
	console.log("Example app listening at http://%s:%s", host, port)
    })
