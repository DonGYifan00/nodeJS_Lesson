var obj = {};  //创建obj对象
var message = ["Name","Email","QQ","Mobile"];  //将四个属性放入数组中方便下面操作
var i=1;
console.log(message[0] + ":");
process.stdin.on("data",function(data){   //当输入数据的时候会执行某些操作
    obj[message[i-1]] = data.toString("utf8").slice(0,-2);  //把接受到的数据修改为字符串
    if(i==4){
        console.log(obj);
        process.exit();
    }
    else{
        console.log(message[i++] + ":");
    }
})