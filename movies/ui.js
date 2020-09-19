class UI {
  static addMovieToUI(newMovie) {
    if (!Storage.isExist(newMovie)) {
      const movieList = document.getElementById("films");
      movieList.innerHTML += `
      <tr>
        <td><img src="${newMovie.url}" class="img-fluid img-thumbnail"></td>
        <td>${newMovie.title}</td>
        <td>${newMovie.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Delete</a></td>
      </tr>`;
      return true;
    }
    return false;
  }

  static clearInputs(e1, e2, e3) {
    e1.value = "";
    e2.value = "";
    e3.value = "";
  }

  static displayMessage(type, message) {
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;

    const cardBody = document.querySelector(".card-body");
    cardBody.appendChild(alert);

    setTimeout(() => {
      alert.remove();
    }, 1000);
  }

  static loadAllMovies(movies) {
    const movieList = document.getElementById("films");

    movies.forEach((movie) => {
      movieList.innerHTML += `<tr>
      <td><img src="${movie.url}" class="img-fluid img-thumbnail"></td>
      <td>${movie.title}</td>
      <td>${movie.director}</td>
      <td><a href="#" id = "delete-film" class = "btn btn-danger">Delete Movie</a></td>
    </tr>`;
    });
  }

  static deleteMovieFromUI(element) {
    element.parentElement.parentElement.remove();
    console.log("silme");
  }

  static clearAllMoviesFromUI() {
    const movieList = document.getElementById("films");
    while (movieList.firstElementChild != null) {
      movieList.firstElementChild.remove();
    }
  }

  static populateWithStorage() {
    const movie1 = new Movie(
      "Tenet",
      "Christopher Nolan",
      "https://cdn.flickeringmyth.com/wp-content/uploads/2020/07/Tenet-Poster-2-1.jpeg",
      ""
    );
    const movie2 = new Movie(
      "Raised by Wolves",
      "Ridley Scott",
      "https://teknoseyir.com/wp-content/uploads/2020/09/6de934d3a7f2a2e.jpg",
      ""
    );
    const movie3 = new Movie(
      "Greenland ",
      "Ric Roman Waugh",
      "https://m.media-amazon.com/images/M/MV5BMzcyMzU4MDUtM2JhOC00ZDg2LTg5MGMtZjc2OGMyMjhlMGE2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      ""
    );
    this.addMovieToUI(movie1);
    this.addMovieToUI(movie2);
    this.addMovieToUI(movie3);

    Storage.addToStorage(movie1);
    Storage.addToStorage(movie2);
    Storage.addToStorage(movie3);
  }
}
