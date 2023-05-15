const MovieService = require('../services/movie.services');
const inputValidator = require('../util/validators.movieInput');

const movieService = new MovieService();

class MovieController {
  async getAllMovies(req, res) {
    try {
      
      const movies = await movieService.getMovies();
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createMovie(req, res) {
    try {
      const { error } = inputValidator.createMovieSchema.validate(req.body);
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
      const { title, rank } = req.body;
      const movie = await movieService.createMovie(title, rank);
      res.status(201).json(movie);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateMovie(req, res) {
    try {
      const { id } = req.params;
      const { error } = inputValidator.updateMovieSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
      const { title, rank } = req.body;
      const movie = await movieService.updateMovie(id, title, rank);
      res.status(200).json(movie);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteMovie(req, res) {
    try {
      const { id } = req.params;
      await movieService.deleteMovie(id);
      res.status(200).json({ message: 'Movie deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getMovie(req, res) {
    try {
      const { id } = req.params;
      const movie = await movieService.getAMovie(id);
      res.status(200).json(movie);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = MovieController;