// https://masai-mock-api.herokuapp.com/news?q={query}
let getData = async (query) => {
try{
let query = document.getElementById("search_input").value;
let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`)
let data = await res.json();
console.log(data)
return data
}
catch(err){
console.log(err);
}
}
let append = (data) =>{
   data.map(({urlToImage,title,description}) =>{
let box = document.createElement("div");

let image = document.createElement("img")
image.src = urlToImage;

let heading = document.createElement("h3");
heading.innerText = title;

let discptn = document.createElement("p");
discptn.innerText = description;

box.append(image,heading,discptn)
container.append(box);
   }) 
}

export {getData,append};