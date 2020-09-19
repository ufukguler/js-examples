class Storage {
  static addToStorage(newFilm) {
    let movies = this.getMoviesFromStorage();
    movies.push(newFilm);
    localStorage.setItem("movies", JSON.stringify(movies));
  }

  static getMoviesFromStorage() {
    let movies = [];
    if (localStorage.getItem("movies") != null) {
      movies = JSON.parse(localStorage.getItem("movies"));
    }
    return movies;
  }

  static deleteFromStorage(movieTitle) {
    let movies = this.getMoviesFromStorage();
    movies.forEach(function (movie, index) {
      if (movie.title === movieTitle) {
        movies.splice(index, 1);
      }
    });
    localStorage.setItem("movies", JSON.stringify(movies));
  }

  static clearAllMoviesFromStorage() {
    localStorage.removeItem("movies");
  }

  static isExist(movie) {
    let movies = this.getMoviesFromStorage();
    for (let i = 0; i < movies.length; i++) {
      if (movie.title.toLowerCase() === movies[i].title.toLowerCase()) {
        console.log("true geldi");
        return true;
      }
    }
    console.log("false geldi");
    return false;
  }
}
