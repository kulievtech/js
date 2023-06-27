const movieCollection = {
    movies: [],
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
        const sameGenre = [];
        for (let i = 0; i < this.movies.length; i++) {
            if (this.movies[i].genre === genre) {
                sameGenre.push(this.movies[i]);
            }
            return sameGenre;
        }
    },
    updateMovie: function (title, update) {
        for (let i = 0; i < this.movies.length; i++) {
            if (this.movies[i].title === title) {
            }
        }
    }
};
