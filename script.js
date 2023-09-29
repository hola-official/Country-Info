const result = document.getElementById("result");
const btn = document.getElementById("search-btn");
let input = document.getElementById("input-word");

input.addEventListener("keyup", (enter) => {
  if (enter.keyCode == 13) {
    btn.click();
  }
});
btn.addEventListener("click", () => {
  const inputWord = document.getElementById("input-word").value;

  fetch(`https://restcountries.com/v3.1/name/${inputWord}?fullText=true`)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
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
                <p><strong>Capital:</strong> ${data[0].capital[0]}</p>
                <p><strong>Continent:</strong> ${data[0].continents[0]}</p>
                <p><strong>Population:</strong> ${data[0].population.toLocaleString()}</p>
                <p><strong>Currencies:</strong> ${currencies[0]}</p>
                <p><strong>Language:</strong> ${languages[0]}</p>
            </div>
    `;
    })
    .catch(() => {
      result.innerHTML = `<h1 class='error'>Couldn't find match</h1>`;
    });
});
