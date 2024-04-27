//fetching the data from the api

let data;
async function fetchData(){
    try {
        const res=await fetch('https://fakestoreapi.com/products')
        const finalres=await res.json()
        console.log(finalres)
        data=finalres
        showData(finalres) // move data to show data  and sowing to ui
    } catch (error) {
        console.log(error)
    }
}
let container=document.getElementById("container") // displaying in the container 
function showData(arr){  // getting data from the api
   
    container.innerHTML=""
    arr.forEach((ele)=>{
        let div=document.createElement("div")
       

        let img=document.createElement("img")
        img.src=ele.image

        let title=document.createElement("h3")
        title.textContent=ele.title

        let price=document.createElement("p")
        price.textContent=` price : $${ele.price}`
        div.append(img,title,price)
        container.append(div)

    })
}

fetchData() // calling the function
 // apply filtering logic by clother in mans
let select1=document.getElementById("selectMan")
select1.addEventListener("change",function(event){
    let target=event.target.value
    console.log("mens filter click ho rha ha na ",target)
    
    let ans=data.filter(function(ele,i){
        return target==ele.category
    })
    showData(ans)
})

// apply filter logic on price low to high and high to low

let select2=document.getElementById("Priority")
select2.addEventListener("change",function(e){
    let target=e.target.value
    let ans=data.sort(function(a,b){
        if(target=='asc'){
            return a.price-b.price
        }else{
            return b.price-a.price
        }
    })
    showData(ans)
})

let input=document.getElementById("inp")
input.addEventListener("change",function(e){
    let Value=input.value
    // console.log(Value,"hello js")
    if(Value!==""){
        let searchData=data.filter(function(ele){
            return ele.title.toLowerCase().includes(Value.toLowerCase());
        })
        showData(searchData)
    }
    else{
        showData(data)
    }
})