var username = process.argv[2];
var password = process.argv[3];
if(username != undefined && password != undefined){
    console.log("用户名:"+username);
    console.log("密码:"+password);
    var Str=username+","+password;
    var buf1 = Buffer.from(Str,"utf-8");
    var buf2 = buf1.toString("base64");
    console.log("base加密:"+buf2);
}
else{
    console.log("用户名密码不能为空！");
}