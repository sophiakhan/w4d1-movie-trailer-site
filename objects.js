var house = {
    stories: 3,
    location: 'Carmel',
    zipCode: 46032,
    materials: ['brick', 'gold', 'marble'],
    color: 'yellow',
    clean: function () {
        console.log('All Clean.');
    }
};

//Object literal. Each item within is its own object - with its own methods and properies

console.log(house.stories);
house.clean; 

var house2 = {
    stories: 1,
    location: 'Indianapolis',
    zipCode: 26240,
    materials: ['wood', 'siding'],
    color: 'tan',
    clean: function () {
        console.log('All Clean.');
    }
};

// constructor functions - functions that are assigned to a variable. Can't call and interact with directly. Is a template for other objects to be made from. Should be uppercase.
var House = function () {
    //instance variables
    this.stories = 1;
    this.materials = ['wood', 'brick'];

    // this.makeItAMansion = function () {
    //     this.stories = 3;
    //     this.materials.push('gold');
    //     this.materials.push('marble');
    // }
}

//new instances

var carmelHouse = new House();
carmelHouse.stories = 3;
carmelHouse.materials = ['gold', 'marble']
// carmelHouse.makeItAMansion;

console.log(carmelHouse);

var indyHouse = new House();

console.log(indyHouse);





// var economy = 'is good';
// if (economy === 'is good') {
//     House.prototype.stories = 5;
// }

//

var Movie = function() {
    this.title = '';
    this.youtubeID = '';

    this.play = function () {

    }
}

// this = laLaLandTrailer (in this instance)

var laLaLandTrailer = new Movie();
    laLaLandTrailer.title = 'La La Land';
    laLaLandTrailer.youtubeID = '85320854308543'; 


//

// es6 classes, introduced 2015

class Movie {
    constructor(movieTitle, movieID) {
        this.title = movieTitle;
        this.youtubeID = movieID;

        this.play = this.play.bind(this); 
        //methods binding - bind below function to the above. replace 'play' with name of method. only happens when method is referring to something in the constructor function (i.e this.title)
        this.pause = this.pause.bind(this); 
    }

    // method goes after the constructor function 
    play() {
        console.log('Playing ' + this.title);
    }

    pause() {
        console.log('Pausing ' + this.title);
    }

    eat() {
        console.log('Eating you.');
    }
}

class ThrillerMovie extends Movie {
    constructor(movieTitle, movieID) {
        super(movieTitle, movieID); //runs extended supervising class from the main constructor and then runs the properties below.
        this.genre = 'Thriller';
    }
}

// constructor is a built in function
// Movie or ThrillerMovie cannot be interacted with. They are a creating a template to build an object that we can interact with. 

var jawsFilm = new ThrillerMovie('Jaws', 'U1fu_sA7XhE');
jawsFilm.play();
jawsFilm.pause();
jawsFilm.eat(); 


