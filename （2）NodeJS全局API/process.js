/**
 * process.pid 进程的id值，唯一标识
 * process.argv 获取命令行参数
 * process.argv 是一个数组，默认有两个数组元素
 * process.argv[0] 表示node可执行文件所在路径
 * process.argv[1] 表示当前执行脚本1文件所在路径
 * process.cwd() 方法返回 Node.js 进程的当前工作目录。
 */
var sys=process.platform;
console.log(sys);
console.log(process.pid);
console.log(process.argv[1]);
console.log(process.cwd());
console.log(process.memoryUsage());