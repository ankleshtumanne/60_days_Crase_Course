function chekPrime(num){
    let count =0
    for(let i=0;i<=num;i++){
        if(num%i==0){
            count+=1
        }
    }
    return count==2
}

let s=10
let getchek=chekPrime(s)
if(getchek==true){
    console.log("yes")

}else{
    console.log("no")
}