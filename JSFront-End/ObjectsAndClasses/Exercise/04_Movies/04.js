function storeInformation(listOfCommands) {
    let commands = ['addMovie', 'directedBy', 'onDate'];
    let movies = [];

    function findMovieByName(movieName) {
        return movies.find(function (movie) {
            return movie.name === movieName; 
        });
    }

    for (let el of listOfCommands) {
        let splitEl = el.split(' ');

        if (el.includes(commands[0])) {
            let movie = {};
            movie.name = splitEl.slice(1).join(' ');
            movies.push(movie);
        } else if (el.includes(commands[1])) {
            let movieName = splitEl.slice(0, splitEl.indexOf('directedBy')).join(' ');
            let director = splitEl.slice(splitEl.indexOf('directedBy') + 1).join(' ');
            let foundMovie = findMovieByName(movieName);

            if (foundMovie) {
                foundMovie.director = director;
            }
        } else if (el.includes(commands[2])) {
            let movieName = splitEl.slice(0, splitEl.indexOf('onDate')).join(' ');
            let date = splitEl.slice(splitEl.indexOf('onDate') + 1).join(' ');
            let foundMovie = findMovieByName(movieName);

            if (foundMovie) {
                foundMovie.date = date;
            }
        }
    }
    let validMovies = movies.filter(function (movie) {
        return movie.hasOwnProperty('name') &&
            movie.hasOwnProperty('director') &&
            movie.hasOwnProperty('date');
    });

    validMovies.forEach(function (movie) {
        console.log(JSON.stringify(movie));
    });
}
storeInformation([ 'addMovie Fast and Furious', 'addMovie Godfather', 'Inception directedBy Christopher Nolan', 'Godfather directedBy Francis Ford Coppola', 'Godfather onDate 29.07.2018', 'Fast and Furious onDate 30.07.2018', 'Batman onDate 01.08.2018', 'Fast and Furious directedBy Rob Cohen' ]);
storeInformation([ 'addMovie The Avengers', 'addMovie Superman', 'The Avengers directedBy Anthony Russo', 'The Avengers onDate 30.07.2010', 'Captain America onDate 30.07.2010', 'Captain America directedBy Joe Russo' ]);