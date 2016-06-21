function part1(){
var lumin1 = process.argv[2]
var lumin2 = process.argv[3]
var lumin3 = process.argv[4]

var luminosity = 0.2126*lumin1 + 0.7152*lumin2 + 0.0722*lumin3

console.log(luminosity)
}

module.exports = {
  part1 : part1
}
