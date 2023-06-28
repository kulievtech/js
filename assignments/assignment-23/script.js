// const movieCollection = {
//     movies: [],
//     addMovie: function (title, director, genre, year) {
//         const movie = {
//             title: title,
//             director: director,
//             genre: genre,
//             year: year
//         };
//         this.movies.push(movie);
//     },
//     getMovieByTitle: function (title) {
//         for (let i = 0; i < this.movies.length; i++) {
//             if (this.movies[i].title === title) {
//                 return this.movies[i];
//             }
//         }
//     },
//     getMovieByGenre: function (genre) {
//         const sameGenre = [];
//         for (let i = 0; i < this.movies.length; i++) {
//             if (this.movies[i].genre === genre) {
//                 sameGenre.push(this.movies[i]);
//             }
//             return sameGenre;
//         }
//     },
//     updateMovie: function (title, update) {
//         for (let i = 0; i < this.movies.length; i++) {
//             if (this.movies[i].title === title) {
//             }
//         }
//     }
// };

const movieCollection = {
    movies: [],
    sameGenre: [],
    addMovie: function (title, director, genre, year) {
        const movie = {
            title: title,
            director: director,
            genre: genre,
            year: year
        };
        this.movies.push(movie);
    },
    getMovieByTitle: function (title) {
        for (let i = 0; i < this.movies.length; i++) {
            if (this.movies[i].title === title) {
                return this.movies[i];
            }
        }
    },
    getMovieByGenre: function (genre) {
        for (let i = 0; i < this.movies.length; i++) {
            if (this.movies[i].genre === genre) {
                this.sameGenre.push(this.movies[i]);
            }
            return this.sameGenre;
        }
    },
    updateMovie: function (title, update) {
        for (let i = 0; i < this.movies.length; i++) {
            if (this.movies[i].title === title) {
                (this.movies[i].director = update.director),
                    (this.movies[i].genre = update.genre),
                    (this.movies[i].year = update.year);
                return this.movies[i];
            }
        }
    },
    deleteMovie: function (title) {
        for (let i = 0; i < this.movies.length; i++) {
            if (this.movies[i].title === title) {
                this.movies.splice(i, 1);
            }
        }
    },
    printMovies: function () {
        for (let i = 0; i < this.movies.length; i++) {
            console.log(`Title: ${this.movies[i].title}`);
            console.log(`Director: ${this.movies[i].director}`);
            console.log(`Genre: ${this.movies[i].genre}`);
            console.log(`Year: ${this.movies[i].year}`);
        }
    }
};

// 1 - Adding movies using addMovie method.

movieCollection.addMovie("Plane", "Jean-Francois Richet", "Thriller", 2023);

movieCollection.addMovie(
    "Guy Ritchie's The Covenant",
    "Guy Ritchie",
    "War",
    2023
);

movieCollection.addMovie(
    "Fast and Furious 10",
    "Louis Leterrier",
    "Action",
    2023
);

movieCollection.addMovie("John Wick 4", "Chad Stahelski", "Action", 2023);

console.log(movieCollection.movies);

// 2 - Getting a movie using getMovieByTitle method.

console.log(movieCollection.getMovieByTitle("Guy Ritchie's The Covenant"));

// 3 - Getting a movie using getMovieByGenre method.

console.log(movieCollection.getMovieByGenre("Action"));

// 4 - updateMovieMethod .

console.log(
    movieCollection.updateMovie("Plane", {
        director: "John Bedoya",
        genre: "Action",
        year: 2013
    })
);

// 5 - deleteMovie method

movieCollection.deleteMovie("Plane");
console.log(movieCollection.movies);

// 6 - printMovies method

console.log(movieCollection.printMovies());
