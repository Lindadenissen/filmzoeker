let addMovieToDom = (movies) => {
  document.getElementById("movie__list").innerHTML = '';
  movies.forEach(element => {
    var listItem = document.createElement("li");
    var link = document.createElement("a");
    link.href = concatUrlAndId(element.imdbID);
    var image = document.createElement("img");
    image.src = element.Poster;
    image.alt = "afbeelding van de film " + element.Title;
    childLi = document.getElementById("movie__list").appendChild(listItem);
    childA = childLi.appendChild(link);
    childImage = childA.appendChild(image)
  })
};

// event aan radiobuttons
let filteredMovies = document.getElementsByName("film-filter");
filteredMovies.forEach(movie => {
  movie.addEventListener("change", function (event) {
    handleOnChangeEvent(event);
  })
});

//maak een functie handelOnChangeEvent en switch statement
let handleOnChangeEvent = (event) => {
  switch (event.target.value) {
    case "nieuwste-films":
      filterLatestMovies();
      break;
    case "avengers":
      filterMovies("Avengers");
      break;
    case "x-men":
      filterMovies("X-Men");
      break;
    case "princess":
      filterMovies("Princess");
      break;
    case "batman":
      filterMovies("Batman");
      break;
    default:
  }
};

//functie filterMovies met argument wordInMovieTitle
let filterMovies = (wordInMovieTitle) => {
  addMovieToDom(movies.filter(currentValue => currentValue.Title.includes(wordInMovieTitle)));
};

//maak functie filterLatestMovies zonder argumenten. 
let filterLatestMovies = () => {
  addMovieToDom(movies.filter(currentValue => parseInt(currentValue.Year) >= 2014));
};

let concatUrlAndId = (imdbIDinMovie) => {
  let urlMovies = `https://www.imdb.com/title/`;
  return urlMovies.concat(imdbIDinMovie);
};

