function circleFun(r){
    var result;
    var result1;
    function circumference(){
        result = 3.14 * 2 * r;
        return result;
    }
    function area(){
        result1 = 3.14 * r * r;
        return result1;
    }
    var temp = {
        circumference: circumference(),
        area: area()
    }
    console.log(temp);
}
module.exports = {
    circleFun:circleFun
};