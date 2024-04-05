let numbersArray = [2,3,7,8,10.13,15,18,34,25]
let data=numbersArray.map((x)=>x*2)
let evenNumbersArray=data.filter((x)=>x%2===0).reduce((acc,curr)=>acc+=curr,0)
console.log(evenNumbersArray)