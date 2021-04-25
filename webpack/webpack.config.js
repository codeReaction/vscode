  //import path module built-in
  const path =require('path')
  //define rules of packing
  module.exports={
    //entry from where to pack
    entry:'./src/main.js',
    //define output
    output:{
      path: path.resolve(__dirname,'./dist'),//root directory/dist folder
      filename:'bundle.js'
    },
    module:{
      rules:[{
        test:/\.css$/,//for files ended with .css
        use:['style-loader','css-loader']
      }]
    }
  }