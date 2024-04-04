function isPrime(num){
    let count=0
    for(let i=0;i<=num;i++){
        if(num%i==0){
            count+=1
        }
    }
    return count==2
}

let arr=[2,3,4,5,6,7,8,9,13]
let s=0
for(let i=0;i<=arr.length;i++){
    let getchek=isPrime(arr[i])
    if(getchek==true){
        console.log(arr[i])
    }    
}


