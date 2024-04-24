async function fetchData(){
    try {
        const res=await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries")
        const finalres=await res.json()
        console.log(finalres.data)
        // getData(finalres.data)
        // showData(finalres.data)
       return finalres.data
    } catch (error) {
        console.log(error)
    }
}
async function getdata(){
    const data=await fetchData()
    return showData(data)
}

function showData(data){
  
    // container.innerHTML = "";
    data.forEach(element => {
       
        let container=document.getElementById("cont")
        container.innerHTML=""
        let div=document.createElement("div")
        let h3=document.createElement("h3")
        h3.textContent=element.country

        let rank=document.createElement("p")
        rank.textContent=element.Rank
        let p2=document.createElement("p")
        p2.textContent=element.population

        div.append(h3,rank,p2)
        container.append(div)

    });
}
function button(){
    getdata()
}
