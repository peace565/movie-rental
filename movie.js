import { createInterface } from 'readline';


class Movie {
  constructor(title, genre, releaseDate, availability) {
    this.title = title;
    this.genre = genre;
    this.releaseDate = releaseDate;
    this.availability = availability;
  }
}

class MovieRentalAPI {
  constructor() {
    this.movies = [];
  }

  getMovies() {
    return this.movies.filter(movie => movie.availability);
  }

  rentMovie(title) {
    const movie = this.movies.find(movie => movie.title === title);
    if (movie && movie.availability) {
      movie.availability = false;
      return 'You have successfully rented ${movie.title}! Enjoy your movie night.';
    } else {
      return 'Sorry, ${title} is not available for rent.';
    }
  }

 
  addMovie(title, genre, releaseDate) {
    const movie = new Movie(title, genre, releaseDate, true);
    this.movies.push(movie);
    return '${title} has been added to our movie collection.';
  }
}

const rentalAPI = new MovieRentalAPI();

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

function promptUser() {
  rl.question('What would you like to do? (1. Rent a movie, 2.View available movies): ', (answer) => {
    switch (answer) {
      case '1':
        rentMovie();
        break;
      case '2':
        viewMovies();
        
        
        break;
      default:
        console.log('Invalid input. Please try again.');
        promptUser();
        break;
    }
  });
}

function rentMovie() {
  rl.question('Enter the title of the movie you want to rent: ', (title) => {
    const result = rentalAPI.rentMovie(title);
    console.log(result)
  })}