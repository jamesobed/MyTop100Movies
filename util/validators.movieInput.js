const Joi = require('joi');

const createMovieSchema = Joi.object({
  title: Joi.string().required(),
  rank: Joi.number().integer().min(1).required(),
});

const updateMovieSchema = Joi.object({
  title: Joi.string(),
  rank: Joi.number().integer().min(1),
});

module.exports = {
  createMovieSchema,
  updateMovieSchema,
};
