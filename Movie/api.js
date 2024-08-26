const moviename = document.querySelector('.searchMovie');
const container = document.getElementById('movieContainer');

document.querySelector('form').addEventListener("submit", (e) => {
    e.preventDefault();
    let nameOfMovie = moviename.value;
    getDetails(nameOfMovie);
});

function viewContent({ Title, Poster ,Actors,Released,Country,Year,Language}) {
    const html = `
        <h1>${Title}</h1>
        <img src="${Poster}" alt="${Title}">
        <h2>${Actors}<br>${Released}<br>${Country}<br>${Year}<br>${Language}</h2>
       
    `;
    container.innerHTML = html;
}

async function getDetails(nameOfMovie) {
    const response = await fetch(`http://www.omdbapi.com/?apikey=25bf92b0&t=${nameOfMovie}`);
    const data = await response.json();
    console.log(data);
    viewContent(data);
}