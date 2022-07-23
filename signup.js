import {structure_logIn_password,structure_job_seeker,structure_signUp_password} from "./export_fns.js"


let byDef=()=>{
let button_div=document.querySelector("#button_div")
let signUpmail=document.querySelector("#signUpmail")


let input_div=document.querySelector("#input_div")
let apple_div=document.querySelector("#apple_div")
let fb_div=document.querySelector("#fb_div")
let terms_text=document.querySelector("#terms_text")
let title_text=document.querySelector("#title_text")
let sub_text=document.querySelector("#sub_text")
let choice_text=document.querySelector("#choice_text")
let choice_link=document.querySelector("#choice_link")
let choice=document.querySelector("#choice")



let button=document.querySelector("form")
button.addEventListener("submit",checkData)
}

let fArray=[];

function newEntry(inp_emailId,inp_password){
    this.emailId=inp_emailId
    this.password=inp_password
}



let isEmailPresent=(check_email)=>{

    let emailData=JSON.parse(localStorage.getItem("localData")) || []


    localStorage.setItem("userEmail",check_email)
fArray=emailData.filter((el)=>{
return el.emailId==check_email
})

if(fArray.length>0){
    return true
}
else{return false}
}

let checkData=(event)=>{
    event.preventDefault()
    
    let check_email=document.querySelector("#check_email").value
    let x=isEmailPresent(check_email)
    
    if(x===true){
        title_text.innerText="Welcome Back"
        choice_text.innerText="Log in with a password instead."
        let load_mail=document.querySelector(".load_mail")

        choice_text.addEventListener("click",()=>{
            signUpmail.innerHTML=structure_logIn_password()
            

            let other_load_mail=document.querySelector(".load_mail")
            let userEmail=localStorage.getItem("userEmail")
            other_load_mail.innerText=userEmail


            let checkPass=(logIn_pass)=>{
                
                if(fArray[0].password==logIn_pass){
                    window.location.href="index.html"
                }

                else{
                   let incorrect_pass=document.querySelector("#incorrect_pass")
                 
                   incorrect_pass.innerText="Error: Incorrect password"
                }

            }

            document.querySelector("form").addEventListener("submit",(event)=>{
                event.preventDefault()
                let logIn_pass=document.querySelector("#logIn_pass").value
                checkPass(logIn_pass)
            })

        })

        let signup_as=document.querySelector(".signup_as")
        signup_as.innerText="Signing in as"

        let userEmail=localStorage.getItem("userEmail")
        load_mail.innerText=userEmail
        newAcc()
    }

    else if(x===false){
        title_text.innerText="Create your Account"
        choice_text.innerText="Sign up with a password instead."

        choice_text.addEventListener("click",()=>{


            signUpmail.innerHTML=structure_job_seeker()
           
           let getNewPass=document.querySelector("#getNewPass")
           getNewPass.addEventListener("click",()=>{
            signUpmail.innerHTML=structure_signUp_password()

            let userEmail=localStorage.getItem("userEmail")
            let load_mail=document.querySelector(".load_mail")
            load_mail.innerText=userEmail

            document.querySelector("form").addEventListener("submit",(event)=>{
                      event.preventDefault()
                      let new_Password=document.querySelector("#new_Password").value

                      if(new_Password.length>=8){

                       let newObb= new newEntry(userEmail,new_Password)
                       
                        let emailData=JSON.parse(localStorage.getItem("localData")) || []

                       emailData.push(newObb)           
                       
                       localStorage.setItem("localData",JSON.stringify(emailData))

    

                        window.location.href="index.html"
                      }
                      
                      
            })
        })

        })

        let signup_as=document.querySelector(".signup_as")
        signup_as.innerText="Signing up as"
        
        let userEmail=localStorage.getItem("userEmail")
        let load_mail=document.querySelector(".load_mail")
        load_mail.innerText=userEmail
        newAcc()
    }

}


let newAcc=()=>{
    button_div.innerHTML=null
    input_div.innerHTML=null

    apple_div.innerHTML=null
    apple_div.style.border="0px"
    apple_div.style.margin="0px"

    fb_div.innerHTML=null
    fb_div.style.border="0px"
    fb_div.style.margin="0px"

    terms_text.innerText="We only use your information as described in our privacy policy. Google may ask for your permission to share details with Indeed like your name, profile picture, public profile information, and email address."
    
    sub_text.innerText="Keep your account safe."
    signUpmail.style.marginBottom="90px"

  
    
    choice_link.append(choice_text)
    choice.style.textAlign="left"

 
    let not_you=document.querySelector(".not_you")
      
    not_you.innerText="(not you?)"
    not_you.href="signup.html"


}


byDef()

