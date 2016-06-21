var request = require('request')


request.get(
  "https://gist.githubusercontent.com/raineorshine/10394189/raw/9b8b43edda19d7fa317a18018b0fa619b53c1e8f/webcolors.json",
  function(err, res, body){
    if(err){
      console.log('Err : ', err)
      return
    }
    var search = JSON.parse(body)
    var enterColor = process.argv[2]

    for(var i =0; i < search.length; i++){
      if(search[i].name.toLowerCase() == enterColor.toLowerCase()){
        console.log(search[i].rgb.r, search[i].rgb.g, search[i].rgb.b)
      }
    }
  }
)

// Students-Mac-mini:webColorsAPI Student$ node webColors.js papayawhip
// 255 239 213
