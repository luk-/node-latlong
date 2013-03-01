# Name
## latlong

# Synopsis
Create a simple k-d tree from lat/long and return the closest points.

# Description
Create a 2-dimensional k-d tree from latitude & longitude coordinate and return the closest points to the specified location.

# Example

```javascript
var latlong = require('latlong')

var coords = [
{lat: '40.739683', long: '73.985151', name: 'Gramercy Theatre'},
{lat: '40.730601', long: '74.000447', name: 'Blue Note Jazz Club'},
{lat: '40.742256', long: '74.006344', name: 'Milk Studios'},
{lat: '40.691805', long: '73.908089', name: 'Greenroom Brooklyn'}
]


var close = latlong(coords, {loc: {lat: 40, long: 50}, max: 50})


console.log(close.reverse())
```

##Motivation:
I found myself writing this logic inline in my app. It's quite simple, but it was generic enough that I could justify splitting it out.