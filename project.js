const url="http://www.omdbapi.com/?apikey=22d8ba0c&";
async function moviesearch(e){
    e.preventDefault();
    const txt=document.getElementById("inputtxt").value;
    console.log("user searched the movie");
    const data=await fetch(`http://www.omdbapi.com/?apikey=22d8ba0c&s=${txt}`);
    const moviem=await data.json();
    console.log("Api response: ",moviem);
    const results = document.getElementById("results");
    results.innerText="";
    if(moviem.Response==="True"){
            moviem.Search.forEach(movie=>{
                const card=document.createElement("div");
                card.classList.add("moviecard");
                card.innerHTML = `
                <h3>${movie.Title}<h3>
                <img src="${movie.Poster} alt="${movie.Title} Poster">
               ` 
                results.appendChild(card);
            });
    }
    else{
        results.innerHTML="<p>No movies found.Try another Search!<p>";
    }
    txt.value="";
}
const btn=document.getElementById("btn");
btn.addEventListener("click",moviesearch);
