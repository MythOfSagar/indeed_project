let byDef=()=>{
let button_div=document.querySelector("#button_div")
let signUpmail=document.querySelector("#signUpmail")

// signUpmail.innerHTML=`<div id="job_seeker">
// <div><img src="https://i.ibb.co/sRNrL6V/indeed.png" alt=""></div>
// <div>
//     <p id="read_next">Ready for the next step?</p>
//     <p id="account_tools">Create an account for tools to help you</p>
// </div>
// <button>Job Seeker</button>
// <button>Employer</button>
// </div>`

let input_div=document.querySelector("#input_div")
let apple_div=document.querySelector("#apple_div")
let fb_div=document.querySelector("#fb_div")
let terms_text=document.querySelector("#terms_text")
let title_text=document.querySelector("#title_text")
let sub_text=document.querySelector("#sub_text")
let choice_text=document.querySelector("#choice_text")
let choice_link=document.querySelector("#choice_link")
let choice=document.querySelector("#choice")
let signup_as=document.querySelector("#signup_as")
let load_mail=document.querySelector("#load_mail")
let not_you=document.querySelector("#not_you")


let button=document.querySelector("button")
button.addEventListener("click",checkData)
}


let checkData=()=>{
    button_div.innerHTML=null
    input_div.innerHTML=null

    apple_div.innerHTML=null
    apple_div.style.border="0px"
    apple_div.style.margin="0px"

    fb_div.innerHTML=null
    fb_div.style.border="0px"
    fb_div.style.margin="0px"

    terms_text.innerText="We only use your information as described in our privacy policy. Google may ask for your permission to share details with Indeed like your name, profile picture, public profile information, and email address."
    title_text.innerText="Create your account"
    sub_text.innerText="Keep your account safe."
    signUpmail.style.marginBottom="90px"

    choice_text.innerText="Sign up with a password instead."
    choice_link.href="next.html"
    choice_link.append(choice_text)
    choice.style.textAlign="left"

    signup_as.innerText="Signing up as"
    load_mail.innerText=""
    not_you.innerText="(not you?)"
    not_you.href=""


}


byDef()

