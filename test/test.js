var latlong = require('../')
var test = require('tap').test
var coords = require('./coords.json').coords

var formatting = function (t, res) {
  t.ok(Array.isArray(res), 'return value should be an array')
  res.forEach(function (val) {
    t.ok(Array.isArray(val), 'each array element is an array')
    t.type(val[0], 'object', 'first element of inner array is an object')
    t.ok(val[0].hasOwnProperty('lat'), 'object contains "lat" member')
    t.ok(val[0].hasOwnProperty('long'), 'object contains "long" member')
    t.type(parseFloat(val[0].lat), 'number', 'ensure lat can be converted from string')
    t.type(parseFloat(val[0].long), 'number', 'ensure long can be converted from string')
  })
}

test('sort by closest location', function (t) {
  var closest = latlong(coords, {loc: {lat: 40, long: 50}, max: 4}).reverse()
  formatting(t, closest)
  var out = require('./out.json')
  t.same(closest, out, 'closest location should match')
  t.end()
})

test('fix max to max possible', function (t) {
  var closest = latlong(coords, {loc: {lat: 1, long: 1}, max: 1000})
  formatting(t, closest)
  var max = closest.length
  t.same(max, 4, 'max length should be 4')
  t.end()
})

test('return null on empty loc key', function (t) {
  var closest = latlong(coords)
  t.type(closest, 'null')
  t.end()
})
