const http = require("http");
const fs=require("fs");
const path=require("path");

var server = http.createServer(function(req,res){
	var htmlPath=path.join(__dirname+"/view/index.html");
	var htmlContent=fs.readFileSync(htmlPath);
	htmlContent=htmlContent.toString("utf8");
	res.writeHead(200,{"Content-Type":"text/html"});
	res.write(htmlContent);
	res.end();
}).listen(8081);
console.log("server 8081");