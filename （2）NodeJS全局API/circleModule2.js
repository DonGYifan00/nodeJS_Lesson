var Circle = {
    circumference:function(r){
        console.log(3.14 * 2 * r);
        return 3.14 * 2 * r;  
    },
    area:function(r){
        console.log(3.14 * r * r);
        return 3.14 * r * r;
    }
}

module.exports = Circle;