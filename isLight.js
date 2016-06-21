var lumin1 = process.argv[2]
var lumin2 = process.argv[3]
var lumin3 = process.argv[4]

var luminosity = 0.2126*lumin1 + 0.7152*lumin2 + 0.0722*lumin3

if(luminosity > 155){
  console.log('light')
}
else{
  console.log('dark')
}

// Students-Mac-mini:nodeColors Student$ node isLight.js 255 239 213
// light
// Students-Mac-mini:nodeColors Student$ node isLight.js 50 15 25
// dark
