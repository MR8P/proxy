var http = require('http');
var express = require('express');
var app = express();
var fs = require('fs');

app.get('/proxy.pac', function (req, res) {
  fs.readFile('proxy/proxy.pac', function (err, pacfile) {
		if (err) {
			console.log(err);
		}
		res.writeHeader(200, {"Content-Type" : "application/x-ns-proxy-autoconfig"});
		res.write(pacfile);
		res.end();
		console.log("PAC file sent...");
	});
})

app.listen(8080, function () {
  console.log('Listening on port 8080!')
})