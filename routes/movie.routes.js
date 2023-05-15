const express = require('express');
const MovieController = require('../controller/movie.controller');

const movie = new MovieController();

const router = express.Router();

router.get('/', movie.getAllMovies);
router.post('/', movie.createMovie);
router.patch('/:id', movie.updateMovie);
router.delete('/:id', movie.deleteMovie);
router.get('/:id', movie.getMovie);

module.exports = router;
