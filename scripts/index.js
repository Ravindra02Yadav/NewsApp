// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

import { getData,append } from "../components/fetch.js";

let search = (e) =>{
    if(e.key === "Enter"){
        let query = document.getElementById("search_input").value; 
       
        getData(query).then((data) =>{
            // append(data.articles)
            localStorage.setItem("news",JSON.stringify(data.articles))
            window.location.href = "search.html";

            
            
         console.log(data.articles,container)
        })

    }
}
document.getElementById("search_input").addEventListener("keypress",search);


// https://masai-mock-api.herokuapp.com/news/top-headlines?country={country}
// function news() {
//     try{
//         // let country = document.getElementById("in")
//         let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country}`);
//         let data = await res.json();
//         console.log(data)
//     }
//     catch(err){
//         console.log(err);
//     }
// }

