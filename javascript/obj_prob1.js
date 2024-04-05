 let obj={
    length:10,
    width:24,
    area:function(){
        console.log( this.width* this.length)
    },
    perameter:function(){
        return ((this.length+this.width)+2)
    }
 }
obj.area()
obj.perameter()