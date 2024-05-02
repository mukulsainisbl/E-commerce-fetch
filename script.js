function Signup(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    let user = {name,email,password}

 fetch(`http://localhost:3000/users`,{
    method:"POST",
    headers:{
        "Content-Type" : "application/json"
    },
    body:JSON.stringify(user)
 })

 .then(()=>{
   
    window.location.href="login.html"
  
 })
 .catch((err)=>{
    console.log("error" , err)
 })
 
 
}




let Signupbtn = document.getElementById("login")

Signupbtn.addEventListener("click" , function(){

    Signup()
})
