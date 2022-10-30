const container = document.getElementById("container");
const search = document.getElementById("search");

search.addEventListener("keyup" , getData);
function getData() {
    container.innerHTML = "";
    getApi();
}    
// async is a keyword that tells the function to return a promise
async function getApi() {
const SEARCH = `https://tenor.googleapis.com/v2/search?q=${search.value}&key=AIzaSyAbBzLGg0yRYKAlrFtC72mhcJj9glFxIL4&limit=21`; 
    // await is a keyword that tells the function to wait for the promise to resolve
    const data = await fetch(SEARCH);
    const result = await data.json();

    // destructuring the result object
    const { results } = result;
    results.map(element => {
        

        const div = document.createElement("div");
        div.classList.add("card");

        div.innerHTML = "";

        const img = document.createElement("img");
        //element.url
        
        img.src = element.media_formats.gif.url;
        img.classList.add("image");

        const name = document.createElement("h2");
        name.textContent = element["searchterm"];

        div.appendChild(name);
        div.appendChild(img);
        container.appendChild(div);

    })
}