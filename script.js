// Array di oggetti Movies
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

// Nuova classe Movie
class Movie {
    constructor(title, year, genre, rating, type) {
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.rating = rating;
        this.type = type;
    }
}

class TvSerie extends Movie {
    constructor(title, year, genre, rating, seasons) {
        super(title, year, genre, rating, 'tv');
        this.seasons = seasons;
    }
}