console.log("-- APP CONNECTED ---");
import card from "./components/card.js";

let movieData = [];
const movieContainer = document.getElementById("movies-container");

async function fetchStudioData() {
  // Implementation for fetching studio data based on search term
  const URL = `https://ghibliapi.vercel.app/films`;
  await fetch(URL)
    .then((response) => response.json())
    .then((data) => data.forEach((movie) => movieData.push(movie)));
  renderMovies();
}

function renderMovies() {
  return card(movieData, movieContainer);
}

fetchStudioData();
