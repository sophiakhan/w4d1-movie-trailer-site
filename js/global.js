// 1. Make a class called Trailer that extends Movie
class Trailer extends Movie {

    // 2. Inside the class, add a constructor function that takes two arguments, a name and an id
    constructor(movieTitle, movieID) {

        // 3. Call the parent constructor function using the super function
        super(movieTitle, movieID);
        // 4. Assign a name and id instance property to the incoming name and id arguments
        this.name = movieTitle;
        this.id = movieID;

        // 5. This method will show the button on the screen, no changes necessary
        this.renderButton()

    }
}

// 6. Create four instances of the Trailer class, passing in the name of a film as the first argument and its corresponding YouTube ID as the second argument

var theAddamsFamily = new Trailer('The Addams Family', 'LyyJYyIexq8');

var halloweenFilm = new Trailer('Halloween', 'DLEk6hES03Q');

var fridayThe13th = new Trailer('Friday the 13th', 'WCO4v-pFBns');

var psychoFilm = new Trailer('Psycho', 'Wz719b9QUqY');


$(document).ready(function() {
    $("button").sparkle({
        color: "#ec96c1",
        minSize: 2,
        maxSize: 10,
        speed: 5
    });
})
