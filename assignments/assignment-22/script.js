// task - 1
// Create a JavaScript Object
// Create a JavaScript object that represents a movie. It should have the following properties: title, director, releaseYear, genre, and rating.

let movie = {
    title: "The Covenant",
    director: "Guy Ritchie",
    releaseYear: 2023,
    genre: "war/action",
    rating: 10
};

console.log(movie);

// task - 2
// Accessing Object Properties
// Print out the value of each property in the console. Use both dot notation and bracket notation to access the properties.

console.log(movie.title);
console.log(movie["title"]);

console.log(movie.director);
console.log(movie["director"]);

console.log(movie.releaseYear);
console.log(movie["releaseYear"]);

console.log(movie.genre);
console.log(movie["genre"]);

console.log(movie.rating);
console.log(movie["rating"]);

// task - 3
// Undefined Properties
// Try accessing a property that you didn't define (for example, producer). Print the result to the console. What value did you get and why?

console.log(movie.producer); // undefined because there is no producer key inside the object.
console.log(movie["producer"]); // undefined because there is no producer key inside the object.

// task - 4
// Modify Object Properties
// Change the value of the rating property to a different number. Print the new value to the console.

movie.rating = 8;
movie["rating"] = 8;

console.log(movie.rating);
console.log(movie["rating"]);

// task - 5
// Add New Properties
// Add a new property boxOffice to the movie object. This property should represent the movie's gross box office revenue in millions of dollars. Print the value to the console.

movie.boxOffice = "$16,938,000 million";
movie["boxOffice"] = "$16,938,000 million";

console.log(movie.boxOffice);
console.log(movie["boxOffice"]);

// task - 6
// Delete Properties
// Delete the boxOffice property from the movie object. Try printing the boxOffice property to the console again. What value do you get and why?

delete movie.boxOffice;
delete movie["boxOffice"];

console.log(movie.boxOffice); // undefined because we removed the boxOffice key from the object.
console.log(movie["boxOffice"]); // undefined because we removed the boxOffice key from the object.

// extra challenge
// Create a function that takes a movie object as its argument and prints out a statement that says "The movie 'title' was directed by 'director' and was released in 'releaseYear'. It is a 'genre' film with a rating of 'rating'."

function movieOfTheYear(object) {
    return object;
}

console.log(movieOfTheYear(movie));
