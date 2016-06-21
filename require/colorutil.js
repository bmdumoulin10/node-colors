var lumin1 = process.argv[2]
var lumin2 = process.argv[3]
var lumin3 = process.argv[4]

function part1(){
  var luminosity = 0.2126*lumin1 + 0.7152*lumin2 + 0.0722*lumin3

    console.log(luminosity)
}

function bonus1(){
  var r = lumin1*.8
  var g = lumin2*.8
  var b = lumin3*.8

    console.log(r, g, b)
}

module.exports = {
  part1 : part1,
  bonus1 : bonus1
}
