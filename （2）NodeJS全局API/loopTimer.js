/**
 * setTimeout超时计时器，延迟计时器
 * setInterval间隔计时器
 * 显示当前时间 ( setInterval() 函数会每秒执行一次函数，类似手表)。使用 clearInterval() 来停止执行:
 */
function loop(){
    console.log("I will loop forever");
}
var temp=setInterval(loop,500);
setTimeout(function(){
    console.log("Game over!");
    clearInterval(temp);
},5000)