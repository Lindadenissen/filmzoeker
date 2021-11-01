const concatUrlAndId = (imdbIDinMovie) => {
  const urlMovies = `https://www.imdb.com/title/`;
  return urlMovies.concat(imdbIDinMovie);
};

const addMovieToDom = (movies) => {
  document.getElementById("movie__list").innerHTML = '';
  movies.forEach(element => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = concatUrlAndId(element.imdbID);
    const image = document.createElement("img");
    image.src = element.Poster;
    image.alt = "afbeelding van de film " + element.Title;
    childLi = document.getElementById("movie__list").appendChild(listItem);
    childA = childLi.appendChild(link);
    childImage = childA.appendChild(image);
  })
};

//alle posters zichtbaar bij laden pagina
addMovieToDom(movies);

// event aan radiobuttons
let filteredMovieButtons = document.getElementsByName("film-filter");
filteredMovieButtons.forEach(movie => {
  movie.addEventListener("change", function (event) {
    handleFilterMovies(event);
  })
});

//maak een functie handelOnChangeEvent en switch statement
let handleFilterMovies = (event) => {
  switch (event.target.value) {
    case "nieuwste-films":
      filterLatestMovies();
      break;
    case "avengers":
      filterMoviesByValue("Avengers");
      break;
    case "x-men":
      filterMoviesByValue("X-Men");
      break;
    case "princess":
      filterMoviesByValue("Princess");
      break;
    case "batman":
      filterMoviesByValue("Batman");
      break;
    default:
  }
};

//functie filterMovies met argument wordInMovieTitle
const filterMoviesByValue = (wordInMovieTitle) => {
  addMovieToDom(movies.filter(currentValue => currentValue.Title.includes(wordInMovieTitle)));
};

//maak functie filterLatestMovies zonder argumenten. 
const filterLatestMovies = () => {
  addMovieToDom(movies.filter(currentValue => parseInt(currentValue.Year) >= 2014));
};

