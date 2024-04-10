let container=document.getElementById("container")
container.style.display="flex"
container.className="cont1"
let data=[{
    id:"1",
    title:"Vijay Shekhar Sharma" ,
    img:"https://masai-website-images.s3.ap-south-1.amazonaws.com/Vijay_Shekhar_Sharma_Paytm_96f52579b8.jpg",
},
{
    id:"2",
    title:"Kunal Shah",
    img:"https://masai-website-images.s3.ap-south-1.amazonaws.com/Rectangle_427_637d69bb57.png",
},
{
    id:"3",
    title:"Amrish Rau",
    img:"https://masai-website-images.s3.ap-south-1.amazonaws.com/amrish_rau_pine_labs_144e5e587c.jpg"
},
{
    id:"4",
    title:"Amrish Rau",
    img:"https://masai-website-images.s3.ap-south-1.amazonaws.com/Sampad_swain_Instamojo_f12bf6341e.jpg"
}
]
data.forEach((ele,i)=>{
    let div=document.createElement("div")
    // div.innerHTML=ele.id
   
    let img=document.createElement("img")
    img.src=ele.img
    let h1=document.createElement("h1")
    h1.textContent=ele.title
    div.append(img,h1)
    container.append(div)
    // return div
})

