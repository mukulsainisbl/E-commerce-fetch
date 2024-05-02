let loginbtn = document.getElementById("Loginbtn")



    async function Login(){
        let loginemail = document.getElementById("Loginemail").value
        let loginpassword = document.getElementById("Loginpassword").value 

       let res = await fetch("http://localhost:3000/users")
       let data = await res.json()
let flag = false
     data.forEach(function(ele){
        if(ele.email === loginemail){

            if(ele.password === loginpassword){
                flag = true
              localStorage.setItem("loginuser" , JSON.stringify(ele))
              alert("login Sucessful") 
               
                   window.location.href ="Product.html"          
            }
            else{
                alert("Wrong Password")
            }
        }
     })
     if(flag === false){
        alert("User not found, Please register")
     }
    }

loginbtn.addEventListener("click" , Login)






