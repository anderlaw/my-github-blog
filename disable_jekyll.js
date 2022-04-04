const fs = require('fs')
const files = fs.readdirSync('./out')
//write an empty .nojekyll file into ./out dir (./out will be refresh after build)
fs.writeFileSync('./out/.nojekyll','',{
    encoding:'utf8'
})


if(fs.existsSync('./docs') && fs.lstatSync('./docs').isDirectory()){
    fs.rmdirSync('./docs',{
        recursive:true
    })
}

fs.renameSync('./out','./docs')