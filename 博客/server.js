const http = require("http");
const path = require("path");
const url = require("url");
const fs = require("fs");
const queryString = require("querystring");

let {chapterList,userList} = require('./fuwuduan');

http.createServer(function(req,res){
    var urlObj = url.parse(req.url);
    var pathName = urlObj.pathname;
    if(pathName == "/login"){
        showLogin(res);
    }
    else if(pathName == "/list"){
        showList(res);
    }
    else if(pathName == "/listmanager"){
        showListmanager(res);
    
    }
    else if(pathName == "/detail"){
        showDetail(res);
    }
    else if(pathName == "/addChapter"){
        showAddChapter(res);
    }
    else if(pathName == "/get"){
        res.writeHead(200,{"Content-Type":"application/json"});
        res.end(JSON.stringify(chapterList));
    } 
    else if(pathName == "/check"){
        var Data = "";
        req.on("data", function (chunk) {
            Data += chunk;
        });
        req.on("end", function () {
            var params = queryString.parse(Data);
            var username = params.username;
            var password = params.password;
            for (var i = 0; i < userList.length; i++) {
                if(userList[i].username == username && userList[i].pwd == password) {
                    result = {state:0}
                    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
                    res.end(JSON.stringify(result));
                    return 0;
                }
            }
            result = {state:1};
            res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
            res.end(JSON.stringify(result));
        });
    }
    else if(pathName == "/getDetail"){
        var dataArray = [];
        var chapterId = queryString.parse(urlObj.query).chapterId;
        chapterList.forEach(function(data){
            if(data.chapterId == chapterId){
                dataArray.push(data);
            }
        })
        res.writeHead(200,{"Content-Type":"application/json"});
        res.end(JSON.stringify(dataArray));
    }
    else if(pathName == "/add"){
        var Data = "";
        req.on("data",(chunk)=>{
            Data += chunk;
        })
        req.on("end",function(){
            var params = queryString.parse(Data);
            var n = {
                "chapterId":chapterList[chapterList.length-1].chapterId + 1,
                "chapterName": params.title,
                "imgPath": "",
                "chapterDes": params.content,
                "chapterContent": params.content,
                "publishTimer":"",
                "author": "admin",
                "views": 0
            }
            chapterList.push(n);
            data = {state:0};
            res.writeHead(200,{"Content-Type":"application/json"});
            res.end(JSON.stringify(data));
        });
    } 
    else{
        var htmlPath = path.join(__dirname,pathName);
        fs.readFile(htmlPath,(err,data)=>{
            if(err){
                res.writeHead(404,{'Content-Type':'text/plain;charset=utf-8'});
                res.end("Can not find the resource!");
            }
            else{
                if(htmlPath.indexOf(".jpg") >= 0){
                    res.writeHead(200,{'Content-Type':'image/jpg;charset=utf-8'});
                }
                else if(htmlPath.indexOf(".png") >= 0){
                    res.writeHead(200,{'Content-Type':'image/png;charset=utf-8'});
                }
                else if(htmlPath.indexOf(".js") >= 0){
                    res.writeHead(200,{'Content-Type':'text/javascript;charset=utf-8'});
                }
                else if(htmlPath.indexOf(".css") >= 0){
                    res.writeHead(200,{'Content-Type':'text/css;charset=utf-8'});
                }
                else{
                    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
                }
                res.end(data);
            }
        })
    }
}).listen(8081);
console.log("server is listening 8081")

function showList(res){
    var indexPath = path.join(__dirname,"/chapterList.html");
    var fileContent = fs.readFileSync(indexPath);
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    res.end(fileContent);
}
function showLogin(res){
    var indexPath = path.join(__dirname,"/login.html");
    var fileContent = fs.readFileSync(indexPath);
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    res.end(fileContent);
}
function showListmanager(res){
    var indexPath = path.join(__dirname,"/list.html");
    var fileContent = fs.readFileSync(indexPath);
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    res.end(fileContent);
}
function showDetail(res){
    var indexPath = path.join(__dirname,"/chapter.html");
    var fileContent = fs.readFileSync(indexPath);
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    res.end(fileContent);
}
function showAddChapter(res){
    var indexPath = path.join(__dirname,"/addChapter.html");
    var fileContent = fs.readFileSync(indexPath);
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    res.end(fileContent);
}
