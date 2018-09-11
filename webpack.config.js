// entry -> output
const path=require("path")
//we use path.join(__dirname) due to diff operating system and computers paths
const config={
    entry:"./src/app.js",
    output:{
        path:path.join(__dirname,"public"),
        filename:"bundle.js"
    },
     module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
          loader: "babel-loader"
      },
      {
        test:/\.s?css$/, // which make S optional 
        use: ['style-loader', 'css-loader', 'sass-loader' ] //array of loaders

      }
    ]
  },
  devtool:"cheap-module-eval-source-map",
    devServer: {
    contentBase: path.join(__dirname, 'public'),
     
     historyApiFallback:true //to render HTTP URL send back to index.html
     ,
           }
  //there's many devtools in webpack
  // devServer more faster also save Files

}
//loader , it's handling a behavior of files 
// loader as i teach webpack how to deal with babel , React
// rule what's will you make with rule
module.exports=config