const http = require("http");
const path = require("path");
const fs = require("fs");

http.creatServer(function(req,res){
    var imgPath = path.join(__dirname,"/1.jpg");
    var imgBuffer = fs.readFileSync(imgPath);
    var base64Data = imgBuffer.toString("base64");
    var imgSrc = "data:image/jpg;base64,"+ base64Data;
    var htmlStr = "<!DOCTYPE html><head></head>"+
    "<body><img src='" + imgSrc + "' /><body>"+
    "</html>";
    res.writeHead(200,{"Content-type":"text/html"});
    res.write(htmlStr);
    res.end();
}).listen(8081);