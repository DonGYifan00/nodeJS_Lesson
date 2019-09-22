function Bomb(){
    this.message = "bomb!!";
}
Bomb.prototype.explode=function(){
    console.log(this);
    console.log(this.message);
}
var bomb = new Bomb();
setTimeout(bomb.explode.bind(bomb),2000);   //使用bind修改this的指向