let structure_job_seeker=()=>{
  return `<div id="job_seeker">
      <div><img src="https://i.ibb.co/sRNrL6V/indeed.png" alt=""></div>
      <div>
          <p id="read_next">Ready for the next step?</p>
          <p id="account_tools">Create an account for tools to help you</p>
      </div>
      <button id="getNewPass">Job Seeker</button>
      <button>Employer</button>
      </div>`
}
 
let structure_signUp_password=()=>{
   return `<div id="signUp_password">
      <div>
          <p>Create your  account</p>
      </div>
      <div>
          <p class="signup_as">Signing up as</p><p class="load_mail"></p><a href="" class="not_you">(not you?)</a>
      </div>
      <form action="">
      <div id="input_password_div">
          <label for="">Password*</label><br>
          <label for="" id="eight_char">Use at least 8 characters</label><br>
          <input type="password" name="" id="new_Password" required>
      </div>
      <div id="captcha">
          <input type="checkbox" name="" id="thecheckbox" required>
          <p>I am human</p>
          <img src="https://i.ibb.co/kXkXD7H/hCaptcha.png" alt="">
      </div>
      <div class="terms">
          <p>
              By creating an account or logging in, you understand and agree to Indeed's Terms. You also acknowledge our Cookie and Privacy policies. You will receive marketing messages from Indeed and may opt out at any time by following the unsubscribe link in our messages, or as detailed in our terms.
          </p>
      </div>
      <div>
          <button>Create Account</button>
      </div>
      </form>
      <div id="wait_text">
          <p>Wait, I am an employer➔</p>
      </div>
      </div>`
}

let structure_logIn_password=()=>{
   return `<div id="logIn_password">
    <div>
        <p>Welcome Back</p>
    </div>
    <div>
        <p class="signup_as">Signing up as</p><p class="load_mail"></p><a href="" class="not_you">(not you?)</a>
    </div>
    <form action="">
    <div id="input_password_div">
        <label for="">Password*</label><br>
    
        <input type="password" name="" id="logIn_pass" required><br>
        <label id="incorrect_pass"></label>
    </div>
    <div class="terms">
        <p>
            By signing in to your account, you agree to Indeed's Terms, Cookie and Privacy policies.
        </p>
    </div>
    <div>
        <button>Sign in</button>
    </div>
    </form>
    <div id="forgot_password">
        <p>Forgot Password ?</p>
    </div>
    </div>`
}

let navBar=()=>{`<div>
            <div class="find_blue"><a href="index.html"><img src="https://i.ibb.co/FBWSrg5/indeedkjgf.png" alt=""></a></div>
            <div class="find_blue"><a href="#">Find Jobs</a></div>
            <div class="company_blue"><a href="#">Comapny Reviews</a></div>
            <div class="salary_blue"><a href="#">Salary Guide</a></div>
        </div>
        <div>
            <div><a href="">Post your resume</a></div>
            <div id="signIndiv"><a href="signup.html">Sign In</a></div>
            <div><a href="">Employers / Post Job</a></div>
        </div>`}

        export default navBar;
export {structure_logIn_password,structure_job_seeker,structure_signUp_password,navBar}
