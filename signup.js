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

signUpmail.innerHTML=` <div id="signUp_password">
<div>
    <p>Create your account</p>
</div>
<div>
    <p class="signup_as">Signing up as</p><p class="load_mail"></p><a href="" class="not_you">(not you?)</a>
</div>
<div id="input_password_div">
    <label for="">Password*</label><br>
    <label for="" id="eight_char">Use at least 8 characters</label><br>
    <input type="password" name="" id="new_Password" required>
</div>
<div id="captcha">
    <input type="checkbox" name="" id="">
    <p>I am human</p>
    <img src="https://i.ibb.co/kXkXD7H/hCaptcha.png" alt="">
</div>
<div class="terms">
    <p>
        By creating an account or logging in, you understand & agree to Indeed's Terms. You also acknowledge our Cookie and Privacy policies. You will receive marketing messages from Indeed and may opt out at any time by following the unsubscribe link in our messages, or as detailed in our terms.
    </p>
</div>
<div>
    <button>Create Account</button>
</div>
<div id="wait_text">
    <p>Wait, I am an employer➔</p>
</div>
</div>`

let input_div=document.querySelector("#input_div")
let apple_div=document.querySelector("#apple_div")
let fb_div=document.querySelector("#fb_div")
let terms_text=document.querySelector("#terms_text")
let title_text=document.querySelector("#title_text")
let sub_text=document.querySelector("#sub_text")
let choice_text=document.querySelector("#choice_text")
let choice_link=document.querySelector("#choice_link")
let choice=document.querySelector("#choice")
let signup_as=document.querySelector(".signup_as")
let load_mail=document.querySelector(".load_mail")
let not_you=document.querySelector(".not_you")


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

