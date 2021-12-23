const path=require("path")
const merge = require('webpack-merge');
module.exports={
    mode:"development",
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"output.js"
    },
    devServer:{
        contentBase:path.join(__dirname,"dist"),
        compress:true,
        port:3800
    }
}