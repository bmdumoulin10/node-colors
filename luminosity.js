var lumin1 = process.argv[2]
var lumin2 = process.argv[3]
var lumin3 = process.argv[4]

var luminosity = 0.2126*lumin1 + 0.7152*lumin2 + 0.0722*lumin3

console.log(luminosity)

// Students-Mac-mini:nodeColors Student$ node luminosity.js 255 239 213
// 240.52439999999999
// Students-Mac-mini:nodeColors Student$ node luminosity.js 50 15 25
// 23.163
