// fill in javascript code here
let name=document.getElementById("name")
let employeeID=document.getElementById("employeeID")
let select=document.getElementById("department")
let exp=document.getElementById("exp")
let tbody=document.querySelector("tbody")
let email=document.getElementById("email")
let number=document.getElementById("mbl")
let arr=[]
let btn=document.querySelector("form")
btn.addEventListener("submit",function(ele,i){
    ele.preventDefault();
    ele.innerHTML=""
    let data={}
    data.name=name.value
    data.employeeID=employeeID.value
    data.select=select.value
    data.exp=exp.value
    data.email=email.value
    data.number=number.value
    // console.log(data)
    arr.push(data)
    console.log(arr)
    localStorage.setItem("data",JSON.stringify(arr))
    getData(arr)
})
function getData(){
    tbody.innerHTML = "";
   
    arr.map(function(ele,i){
        JSON.parse(localStorage.getItem("data"))

        let tr=document.createElement("tr")
    
        let td1=document.createElement("td")
        td1.textContent=ele.name
        let td2=document.createElement("td")
        td2.textContent=ele.employeeID
        let td3=document.createElement("td")
        td3.textContent=ele.select
        let td4=document.createElement("td")
        td4.textContent=ele.exp
        let td5=document.createElement("td")
        td5.textContent=ele.email
        let td6=document.createElement("td")
        td6.textContent=ele.number
        tr.append(td1,td2,td3,td4,td5,td6)
        tbody.append(tr)
    })
}
