import {post,popular_search} from "./landing_page.js"

let Post=document.querySelector("#post")
Post.innerHTML=post

let PopularSearches=document.querySelector("#popular_searches")
PopularSearches.innerHTML=popular_search


document.querySelector("#find_jobs").addEventListener("click",findJobFunction)
function findJobFunction(){
    //console.log("working")
    Post.innerHTML=null
    PopularSearches.innerHTML=null

    

    getData()

}

let getData=async()=>{
    let job_title=document.querySelector("#job_title").value 
    let city=document.querySelector("#city").value 
     let url=`https://api.adzuna.com/v1/api/jobs/in/search/1?app_id=d6d838a5&app_key=538cf7524ac5d504e82b25ccf0afd74d&results_per_page=20&title_only=${job_title}&where=${city}`
     //let url=`https://api.adzuna.com/v1/api/jobs/in/search/1?app_id=d6d838a5&app_key=538cf7524ac5d504e82b25ccf0afd74d&results_per_page=20&title_only=frontend%20developer&where=kolkata`
     let res= await fetch(url)
     let data=await res.json()
     console.log(data)
  }

