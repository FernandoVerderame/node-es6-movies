// ! Array di oggetti Movies
const movies = [
    {
        title: 'Inception',
        year: 2010,
        genre: 'Sci-Fi',
        rating: 8.8,
        type: 'movie',
    },
    {
        title: 'Breaking Bad',
        year: 2008,
        genre: 'Crime',
        rating: 9.5,
        type: 'tv',
        seasons: 5
    },
    {
        title: 'The Matrix',
        year: 1999,
        genre: 'Sci-Fi',
        rating: 8.7,
        type: 'movie',
    },
    {
        title: 'Stranger Things',
        year: 2016,
        genre: 'Drama',
        rating: 8.8,
        type: 'tv',
        seasons: 4
    },
    {
        title: 'The Godfather',
        year: 1972,
        genre: 'Crime',
        rating: 9.2,
        type: 'movie',
    },
    {
        title: 'Game of Thrones',
        year: 2011,
        genre: 'Fantasy',
        rating: 9.3,
        type: 'tv',
        seasons: 8
    }
]


// ! Nuova classe Movie
class Movie {
    constructor(title, year, genre, rating, type) {
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.rating = rating;
        this.type = type;
    }

    // Info film
    toString() {
        return `${this.title} è un film di genere ${this.genre}. E' stato rilasciato nel ${this.year} ed ha un voto di ${this.rating}.`
    }
}


// ! Nuova classe TvSerie
class TvSerie extends Movie {
    constructor(title, year, genre, rating, seasons) {
        super(title, year, genre, rating, 'tv');
        this.seasons = seasons;
    }

    // Info TvSerie
    toString() {
        return `${this.title} è una serie tv di genere ${this.genre}. La prima stagione è stata rilasciato nel ${this.year} ed in totale sono state prodotte ${this.seasons} stagioni. Ha un voto di ${this.rating}.`
    }
}


// ! Nuovo array con instanze Movie o TvSerie
const newMovies = movies.map(m => {
    if (m.type === 'movie') {
        return new Movie(m.title, m.year, m.genre, m.rating, m.type);
    } else if (m.type === 'tv') {
        return new TvSerie(m.title, m.year, m.genre, m.rating, m.seasons);
    }
})

// console.log(newMovies);


// ! Funzione per la media dei voti di tutti i film per un determinato genere
const getAverageVotes = (list, genre) => {

    // Filtro i film per genere specifico
    const filteredMovies = list.filter(l => l.genre.toLowerCase() === genre.toLowerCase());

    // Calcolo la somma dei voti dei film filtrati 
    const totalVotes = filteredMovies.reduce((sum, movie) => sum + movie.rating, 0);

    // Calcolo la media dei voti 
    const averageVotes = filteredMovies.length > 0 ? totalVotes / filteredMovies.length : 0;

    return averageVotes;
}

// Media voti film Sci-Fi
const averageSciFiVotes = getAverageVotes(newMovies, 'Sci-Fi');
console.log(`La media dei voti dei film di genere Sci-Fi è ${averageSciFiVotes}.`);

// Media voti film Crime
const averageCrimeVotes = getAverageVotes(newMovies, 'Crime');
console.log(`La media dei voti dei film di genere Crime è ${averageCrimeVotes}.`);


// ! Funzione che restituisce la lista di tutti i generi dei film
const getGenreList = (list) => {

    // Creo un array per i generi
    const genres = [];

    // Ciclo sulla lista dei film ed inserisco soltanto quelli che non sono ancora presenti
    list.forEach(l => {
        if (!genres.includes(l.genre)) {
            genres.push(l.genre);
        }
    })

    return genres;
}

// Lista di generi
const genresList = getGenreList(newMovies);
console.log(genresList);


// ! Funzione che filtra i film in base ad un genere passato come argomento
const getFilteredMoviesByGenre = (list, genre) => {

    // Filtro i film per genere specifico
    return list
        .filter(l => l.genre.toLowerCase() === genre.toLowerCase())
        .map(item => item.toString());
}

// Lista film per genere
const listByGenre = getFilteredMoviesByGenre(newMovies, 'Crime');
console.log(listByGenre);