const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");
const populate = document.getElementById("populate");

// load events
eventListeners();

function eventListeners() {
  form.addEventListener("submit", addFilm);
  document.addEventListener("DOMContentLoaded", function () {
    let movies = Storage.getMoviesFromStorage();
    UI.loadAllMovies(movies);
  });
  cardBody.addEventListener("click", deleteMovie);
  clear.addEventListener("click", clearAllMovies);
  populate.addEventListener("click", populateWithStorage);
}

function addFilm(e) {
  const title = titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;
  if (title === "" || director === "" || url === "") {
    UI.displayMessage("danger", "Empty input field(s)!");
  } else {
    const newMovie = new Movie(title, director, url);
    if (UI.addMovieToUI(newMovie)) {
      Storage.addToStorage(newMovie);
      UI.displayMessage("success", "the movie is added!");
    }
    UI.clearInputs(titleElement, directorElement, urlElement);
    UI.displayMessage("danger", "Already Exist!");
  }
  e.preventDefault();
}

function deleteMovie(e) {
  if (e.target.id === "delete-film") {
    UI.deleteMovieFromUI(e.target);
    Storage.deleteFromStorage(
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent
    );
    UI.displayMessage("success", "the movie is deleted!");
  }
}

function clearAllMovies() {
  UI.clearAllMoviesFromUI();
  Storage.clearAllMoviesFromStorage();
}

function populateWithStorage() {
  UI.populateWithStorage();
}
