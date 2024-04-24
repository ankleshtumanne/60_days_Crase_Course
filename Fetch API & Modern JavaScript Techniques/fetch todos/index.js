async function fetchData(){
    try {
        const res=await fetch("https://jsonplaceholder.typicode.com/todos")
        const finalres=await res.json()
        console.log(finalres)
        getData(finalres)
        return finalres
    } catch (error) {
        console.log(error)
    }
}
function Button(){
    fetchData()
}
const getData = (data)=>{
    data.forEach(element => {
        let container=document.getElementById("container")
        let div=document.createElement("div")
        let h3=document.createElement("h3")
        h3.textContent=element.title
        let p=document.createElement("p")
        p.textContent=element.userId
        let p2=document.createElement("p")
        p2.textContent=element.id
        div.append(h3,p,p2)
        container.append(div)
    });
}



