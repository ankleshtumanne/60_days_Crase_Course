let store;
async function fetchData(){
    const res=await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees")
    // const res=await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=1&limit=10&filterBy=gender&filterValue=female&sort=salary&order=asc")
    const finalres=await res.json()
    // console.log(finalres.data)
    store=finalres.data
    console.log(store)
    // showData(finalres.data)
}

let table=document.getElementById("table1")
function showData(arr){
    arr.map(function(ele){
        let thead=document.createElement("thead")

        let tr=document.createElement("tr")

        let td1=document.createElement("th")
        td1.textContent=ele.id

        let td2=document.createElement("th")
        td2.textContent=ele.name

        let td3=document.createElement("th")
        td3.textContent=ele.gender

        let td4=document.createElement("td")
        td4.textContent=ele.department

        let td5=document.createElement("td")
        td5.textContent=ele.salary
        tr.append(td1,td2,td3,td4,td5)
        thead.append(tr)
        table.append(thead)
    })
}
// am filtering data based on gender
let select2=document.getElementById("sortbygender")
select2.addEventListener("change",function(event){
   let value=event.target.value
//    console.log("click ho rha h ",value)
   let ans=store.filter(function(ele){
    return value==ele.gender
   })
   console.log(ans,"clicking")
   showData(ans)
   
})
fetchData()
// 


// am filtering data based on department
let select3=document.getElementById("sortbydepartment")

select3.addEventListener("change",function(event){
    let value=event.target.value
 //    console.log("click ho rha h ",value)
    let ans=store.filter(function(ele){
     return value==ele.department
    })
    console.log(ans,"clicking")
    showData(ans)
    
 })

// am sorting data based on salary
 let salarysort=document.getElementById("sortbysalary")
salarysort.addEventListener("change",function(event){
    let target=event.target.value
    // fetchData(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?sort=salary&order=${target}`)
    console.log("click ho rha h ",target)
    let ans=store.sort(function(a,b){
        if(target=="asc"){
            return a.salary-b.salary
        }
        else{
            return b.salary-a.salary
        }
    })
    
   showData(ans)
})
