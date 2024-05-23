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
    #title;
    #year;
    #genre;
    #rating;

    constructor(title, year, genre, rating) {
        this.#title = title;
        this.#year = year;
        this.#genre = genre;
        this.#rating = rating;
    }

    // Info film
    toString() {
        return `${this.title} è un film di genere ${this.genre}. E' stato rilasciato nel ${this.year} ed ha un voto di ${this.rating}.`
    }

    // Getter title
    get title() {
        return this.#title;
    }

    // Setter title
    set title(title) {
        this.#title = title;
    }

    // Getter year
    get year() {
        return this.#year;
    }

    // Setter year
    set year(year) {
        this.#year = year;
    }

    // Getter genre
    get genre() {
        return this.#genre;
    }

    // Setter genre
    set genre(genre) {
        this.#genre = genre;
    }

    // Getter rating
    get rating() {
        return this.#rating;
    }

    // Setter rating
    set rating(rating) {
        this.#rating = rating;
    }
}


// ! Nuova classe TvSerie
class TvSerie extends Movie {
    #seasons;

    constructor(title, year, genre, rating, seasons) {
        super(title, year, genre, rating);
        this.seasons = seasons;
    }

    // Info TvSerie
    toString() {
        return `${this.title} è una serie tv di genere ${this.genre}. La prima stagione è stata rilasciato nel ${this.year} ed in totale sono state prodotte ${this.#seasons} stagioni. Ha un voto di ${this.rating}.`
    }

    // Getter seasons
    get seasons() {
        return this.#seasons;
    }

    // Setter seasons
    set seasons(seasons) {
        this.#seasons = seasons;
    }
}


// ! Nuovo array con instanze Movie o TvSerie
const newMovies = movies.map(m => {
    if (m.type === 'movie') {
        return new Movie(m.title, m.year, m.genre, m.rating);
    } else {
        return new TvSerie(m.title, m.year, m.genre, m.rating, m.seasons);
    }
})

newMovies.forEach(movie => console.log(movie.toString()));

// ! Funzione per la media dei voti di tutti i film per un determinato genere
const getAverageVotes = (movies, genre) => {

    // Filtro i film per genere specifico
    const filteredMovies = movies.filter(m => m.genre.toLowerCase() === genre.toLowerCase());

    // Calcolo la somma dei voti dei film filtrati 
    const totalVotes = filteredMovies.reduce((sum, m) => sum + m.rating, 0);

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
const getGenreList = movies => {

    // Creo un array per i generi
    const genres = [];

    // Ciclo sulla lista dei film ed inserisco soltanto quelli che non sono ancora presenti
    movies.forEach(m => {
        if (!genres.includes(m.genre)) {
            genres.push(m.genre);
        }
    })

    return genres;
}

// Lista di generi
const genresList = getGenreList(newMovies);
console.log(genresList);


// ! Funzione che filtra i film in base ad un genere passato come argomento
const getFilteredMoviesByGenre = (movies, genre) => {

    // Filtro i film per genere specifico
    return movies
        .filter(m => m.genre.toLowerCase() === genre.toLowerCase())
        .map(m => m.toString());
}

// Lista film per genere
const listByGenre = getFilteredMoviesByGenre(newMovies, 'Crime');
console.log(listByGenre);

class Cart {
    #price = 3.99;
    #movies = [];

    get movies() {
        return this.#movies;
    }

    // Aggiungi un film al carrello
    addMovie(movie) {
        // Filtro per titolo
        if (this.#movies.find(m => m.title.toLowerCase() === movie.title.toLowerCase())) {
            return;
        }
        this.#movies.push(movie);
    }

    // Rimuovi un film dal carrello
    removeMovie(movie) {
        this.#movies = this.#movies.filter(m => m.title.toLowerCase() !== movie.tile.toLowerCase());
    }

    // Calcola il costo totale dei film nel carrello
    getTotalCost() {
        return this.#price * this.#movies.length;;
    }

    // Stampa il contenuto del carrello
    printCart() {
        console.log('Carrello:');
        this.#movies.forEach(m => console.log(m.toString()));
        console.log(`Costo totale: €${this.getTotalCost().toFixed(2)}`);
    }
}

const cart = new Cart();
cart.addMovie(new Movie('Inception', 2010, 'Sci-Fi', 8.8));
cart.addMovie(new Movie('The Matrix', 1999, 'Sci-Fi', 8.7));
cart.addMovie(new Movie('The Godfather', 1972, 'Crime', 9.2));

cart.printCart();