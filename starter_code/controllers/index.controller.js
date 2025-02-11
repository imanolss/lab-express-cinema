const Movie = require('../models/Movie')

exports.indexView = (req, res, next) => {
  res.render('index')
}
exports.moviesGet = async (req, res, next) => {
  const movies = await Movie.find()
  res.render('movie-list', { movies })
}
exports.moviesDetail = async (req, res, next) => {
  const movie = await Movie.findById(req.params.id)
  res.render('movie-detail', movie)
}
