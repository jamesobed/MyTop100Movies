const Movie = require('../model/movie.model');

class MovieService {
    constructor() {
        this.movies = [];
    }

async getMovies  ()  {
  try {
    const movies = await Movie.find().sort({ rank: 1 });
    return movies;
  } catch (error) {
    throw new Error('Unable to fetch movies');
  }
};

async createMovie  (title, rank)  {
  try {
    const movie = new Movie({ title, rank });
    await movie.save();
    return movie;
  } catch (error) {
    throw new Error('Unable to create movie');
  }
};

async updateMovie  (id, title, rank)  {
  try {
    const movie = await Movie.findByIdAndUpdate(id, { title, rank }, { new: true });

    if (!movie) {
      throw new Error('Movie not found');
    }

    return movie;
  } catch (error) {
    throw new Error('Unable to update movie');
  }
};

async deleteMovie  (id)  {
  try {
    const movie = await Movie.findByIdAndDelete(id);

    if (!movie) {
      throw new Error('Movie not found');
    }
  } catch (error) {
    throw new Error('Unable to delete movie');
  }
};

async getAMovie  (id)  {
  try{
  const movie = await Movie.findById(id);

    if (!movie) {
      throw new Error('Movie not found');
    }
    return movie;
  } catch (error) {
    throw new Error('Unable to delete movie');
  }

}

}

module.exports = MovieService;