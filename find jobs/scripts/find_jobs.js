import {post,popular_search} from "./landing_page.js"

let Post=document.querySelector("#post")
Post.innerHTML=post

let PopularSearches=document.querySelector("#popular_searches")
PopularSearches.innerHTML=popular_search

let data;
document.querySelector("#find_jobs").addEventListener("click",findJobFunction)
async function findJobFunction(){
    //console.log("working")
    Post.innerHTML=null
    PopularSearches.innerHTML=null
    // let content=document.querySelector("#content")
    // content.innerHTML=filter_option
    data= await getData()
    appenData(data)
    //getData()
    
console.log(data)


}




let getData=async()=>{
    let job_title=document.querySelector("#job_title").value 
    let city=document.querySelector("#city").value 
     let url=`https://api.adzuna.com/v1/api/jobs/in/search/1?app_id=d6d838a5&app_key=538cf7524ac5d504e82b25ccf0afd74d&results_per_page=200&title_only=${job_title}&where=${city}&salary_min=10000&salary_max=10000000`
     //let url=`https://api.adzuna.com/v1/api/jobs/in/search/1?app_id=d6d838a5&app_key=538cf7524ac5d504e82b25ccf0afd74d&results_per_page=20&title_only=frontend%20developer&where=kolkata`
     let res= await fetch(url)
     let information=await res.json()
     //appenData(data)
     //console.log(ingormstion)
     return information
  }

  let appenData=(data)=>{

    let content=document.querySelector("#content")
    //content.innerHTML=filter_option
    let filterSection=document.createElement("div")
    filterSection.setAttribute("id","filter_section")

    let partTime=document.createElement("button")
    partTime.innerText="Part Time Job"
    partTime.setAttribute("id","part_time")
    partTime.setAttribute("class","job_type")
    partTime.addEventListener("click",function(){
      partTimeJob()
    })

    let fullTime=document.createElement("button")
    fullTime.innerText="Full Time Job"
    fullTime.setAttribute("id","full_time")
    fullTime.setAttribute("class","job_type")

    let LTH=document.createElement("button")
    LTH.innerText="Salary Low to High"
    LTH.setAttribute("id","lth")
    LTH.setAttribute("class","salary")

    let HTL=document.createElement("button")
    HTL.innerText="Salary High to Low"
    HTL.setAttribute("id","htl")
    HTL.setAttribute("class","salary")

    content.append(filterSection,partTime,fullTime,LTH,HTL)

    let jobs=document.querySelector("#jobs")
    jobs.innerHTML=null 
    let info=data.results
    info.forEach((ele)=>{
         let title=document.createElement("h2")
         title.innerText=ele.title 
         let company_name=document.createElement("p")
         company_name.innerText=ele.company.display_name; 
         let location=document.createElement("p")
         location.innerText=`${ele.location.area[0]},${ele.location.area[1]},${ele.location.area[2]}`
         
         let div1=document.createElement("div")
         div1.setAttribute("class","div1")
         let div2=document.createElement("div")
         div2.innerHTML=`<h4><i class="fa-solid fa-money-bills"></i> <i class="fa-solid fa-indian-rupee-sign"></i>${Math.floor(ele.salary_min/12)} - <i class="fa-solid fa-indian-rupee-sign"></i>${Math.floor(ele.salary_max/12)} a month  <i class="fa-solid fa-check"></i> </h4>`
         let div3=document.createElement("div")
         div3.innerHTML=`<h4><i class="fa-solid fa-briefcase"></i> ${ele.contract_time}`

         let p1=document.createElement("p")
         p1.innerHTML=`<i class="fa-solid fa-arrow-right-long"></i> Apply with your Indeed Resume`
         let p2=document.createElement("p")
         p2.innerHTML=`<i class="fa-solid fa-user-plus"></i> Hiring multiple employes`

         let box=document.createElement("div")
         box.setAttribute("class","box")
         box.addEventListener("click",function(){
          job_details(ele)
         })

         div1.append(div2,div3)
        box.append(title,company_name,location,div1,p1,p2)
        jobs.append(box)

    })
    
  }

  let jobDetails=document.querySelector("#job_details")
  function job_details(ele){
     jobDetails.innerHTML=null
     console.log(ele)
     let heading=document.createElement("h2")
     heading.innerText=ele.title
     let company_name=document.createElement("p")
     company_name.innerText=ele.company.display_name; 
     let location=document.createElement("p")
     location.innerText=`${ele.location.area[0]},${ele.location.area[1]},${ele.location.area[2]}`
     let salary=document.createElement("p")
     salary.innerHTML=`Salary : <i class="fa-solid fa-indian-rupee-sign"></i>${Math.floor(ele.salary_min/12)} - <i class="fa-solid fa-indian-rupee-sign"></i>${Math.floor(ele.salary_max/12)} a month`
     let desc=document.createElement("p")
     desc.innerText=`Description : ${ele.description}`

     let apply=document.createElement("button")
     apply.innerText="Apply now"
     apply.setAttribute("id","apply_btn")
     apply.addEventListener("click",function(){
      job_applyFunc(ele)
     
     })
     let box=document.createElement("div")

     
     box.append(heading,company_name,location,salary,desc,apply)
     jobDetails.append(box)

  }

  
  function job_applyFunc(ele){
   localStorage.setItem("Applied_job_data",JSON.stringify(ele))
   
        window.location.href="application.html"
  }
