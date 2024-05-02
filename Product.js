let container = document.getElementById("container")
 
let logindata = JSON.parse(localStorage.getItem("loginuser"))


document.getElementById("username").innerHTML = `Welcome, ${logindata.name}`

async function GetData(){

    let res = await fetch(`http://localhost:3000/products`)
    let data  = await res.json()
    
    DisplayData(data)
}


function DisplayData(arr){
arr.forEach(function(ele,i){

    let card = document.createElement("div")
let image = document.createElement("img")
image.src = ele.src

let title = document.createElement("h3")
title.innerHTML = ele.title

let price = document.createElement("h4")
price.innerHTML = ele.price

let delbtn = document.createElement("button")
delbtn.innerHTML = "Delete"

delbtn.addEventListener("click" ,function(){
    Deletefun(ele)
})

let addbtn = document.createElement("button")
addbtn.innerHTML = "Add to cart"

addbtn.addEventListener("click" , function(){
    AddtoCartfun(ele,i)
})



card.append(image,title,price, addbtn, delbtn)

container.append(card)

})
}

function logout(){

    localStorage.removeItem("loginuser")
    alert("Logout Succesful")
    window.location.href = "login.html"
}


 async function  AddtoCartfun(ele,i){
  
    let res = await fetch("http://localhost:3000/allUsersCart")
    let data = await res.json()

    //  data[logindata.name].push(ele)

     fetch("http://localhost:3000/allUsersCart",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
     })
     .then(()=>{
        console.log("Data add to cart ")
     }).catch((err)=>{
        console.log("error", err)
     })
    
}








GetData()