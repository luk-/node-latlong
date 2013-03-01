var kdt = require('kdt')

module.exports = function (coords, options) {

  if (!options.loc) {
    throw new Error('location not provided')
  }

  var dimensions = ['lat', 'long']
  var distance = function (a, b) {
    return Math.pow(a.lat - b.lat, 2) + Math.pow(a.long - b.long, 2)
  }

  var max = options.max || 1
  // if the user sets max higher than possible, fix for them
  max > coords.length ? max = coords.length : ''

  distance = options.distance || distance
  dimensions = options.dimensions || dimensions

  var tree = kdt.createKdTree(coords, distance, dimensions)
  var nearest = tree.nearest(options.loc, max)
  return nearest

}
