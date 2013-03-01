var latlong = require('../')
var test = require('tap').test
var coords = require('./coords.json').coords

test('sort by closest location', function (t) {
  var closest = latlong(coords, {loc: {lat: 40, long: 50}, max: 4}).reverse()
  var out = require('./out.json')
  t.same(closest, out)
  t.end()
})

test('fix max to max possible', function (t) {
  var closest = latlong(coords, {loc: {lat: 1, long: 1}, max: 1000})
  var max = closest.length
  t.same(max, 4)
  t.end()
})

test('throw error on empty loc key', function (t) {
  t.throws(function () {
    var closest = latlong(coords)
  })
  t.end()
})
