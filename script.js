// const variables 



//variables

// let city;

// city.addEventListener('click', (e) => {
//     city = 'search'


//dom elements 

const url = 'https://api.openbrewerydb.org/breweries?by_city='
const search = document.querySelector("#searchBar")
const cityShow = document.getElementById("cityResult");







function getData (event) {  
    event.preventDefault()
let textInput = document.querySelector("#input").value;
console.log(textInput)

    fetch(url+textInput)
        .then(res => { 
            // console.log (res.json())
            return res.json();
        })
        .then(res => {
           console.log(res)
           cityShow.innerHTML = ""
           res.forEach(brewery => {
               const p = document.createElement("p")
               p.innerText = brewery.name
               cityShow.appendChild(p)
           })
        // .promiseResult[textInput].city
        //    cityShow.innerHTML = res.promiseResult[textInput].city;
        })
}

search.addEventListener("submit", getData)


    

        
    // functions 

    // somethingToClick 
        // when you click search show results by city 
    //
    
    
    //event listeners 

    //show results when you click search
    // clear results when you click clear 
