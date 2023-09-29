const result = document.getElementById("result");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
    let inputWord = document.getElementById("input-word").value;

    fetch(`https://restcountries.com/v3.1/name/${inputWord}?fullText=true`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // console.log(data[0].capital[0]);
            // console.log(data[0].continents[0]);
            // console.log(data[0].population);
            const currencies = Object.keys(data[0].currencies);

            // console.log(currencies);

            const languages = Object.values(data[0].languages);

            // console.log(languages);

            result.innerHTML = `
    <div class="info">
                <img src="${data[0].flags.svg}" alt="${data[0].flags.alt}">
                <h2>${inputWord}</h2>
            </div>

            <div class="details">
                <p>Capital:<span> ${data[0].capital[0]}</span></p>
                <p>Continent:<span> ${data[0].continents[0]}</span></p>
                <p>Population:<span> ${(data[0].population).toLocaleString()}</span></p>
                <p>Currencies:<span>  ${currencies[0]}</span></p>
                <p>Language:<span> ${languages[0]}</span></p>
            </div>
    `
        })
        .catch(() => {
            result.innerHTML = `<h1 class='error'>Couldn't find match</h1>`
        })
});
