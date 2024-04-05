let data=[
	{name: "Nrupul", age: 32},
	{name: "Prateek" , age: 30},
	{name: "Aman" , age: 26},
	{name: "Albert" , age: 28},
	{name: "Yogesh" , age: 44},
]

let output=data.filter((age)=>age.age>30 ).map((ele)=>ele.name)
console.log(output)