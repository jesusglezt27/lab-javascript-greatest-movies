// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map((movie) =>movie.director);
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergMovies = moviesArray.filter((movies) => movies.director === "Steven Spielberg" && movies.genre.includes("Drama"));
    return spielbergMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0

    const avg8 = moviesArray.filter(score => typeof score.score === 'number').reduce((sum, value) => sum + value.score, 0) / moviesArray.length

    return (Math.round(avg8 * 100)) / 100
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const drama = moviesArray.filter(drama => drama.genre.includes('Drama'))
    if (drama.length === 0) return 0
    const dramaScore = drama.reduce((sum, value) => sum + value.score, 0) / drama.length
    return (Math.round(dramaScore * 100)) / 100
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let moviesByYear = moviesArray.map((element)=> element);
    let mixMovies = moviesByYear.sort((a,b)=> a.year - b.year);
    return mixMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const orderedMovies = [...moviesArray];
    orderedMovies.sort((firstMovie, secondMovie) => {
    return firstMovie.title.localeCompare(secondMovie.title);
    });
    const movieTitles = orderedMovies.map((movie) => movie.title);
    return movieTitles.slice(0, 20);
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
