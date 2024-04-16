function closeers(a){
    console.log("hello"+a)
    var b=4
    return function(){
        return a+b
    }
}
// let suma=closeers(2)
// console.log(closeers(3))clo
closeers(2)