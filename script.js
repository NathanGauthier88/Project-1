const url = 'https://api.openbrewerydb.org/breweries?by_city='
const search = document.querySelector("#searchBar")
const cityShow = document.getElementById("cityResult");

function getData (event) {  
    event.preventDefault()
let textInput = document.querySelector("#input").value;
console.log(textInput)

    fetch(url+textInput)
        .then(res => { 
            return res.json();
        })
        .then(res => {
           console.log(res)
           cityShow.innerHTML = ""
           res.forEach(brewery => {
               const p = document.createElement("p")
               p.innerText = brewery.name.toLowerCase()
               cityShow.appendChild(p)
           })
        })
}

search.addEventListener("submit", getData)


    

  
