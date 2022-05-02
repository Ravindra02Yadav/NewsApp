// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

let itemData = JSON.parse(localStorage.getItem("news"));
let results = document.getElementById("results"); 
// console.log(itemData);
itemData.map(({urlToImage,title,description}) =>{
    let box = document.createElement("div");
    
    let image = document.createElement("img")
    image.src = urlToImage;
    
    let heading = document.createElement("h3");
    heading.innerText = title;
    
    let discptn = document.createElement("p");
    discptn.innerText = description;
    
    box.append(image,heading,discptn)
    results.append(box);
       }) 