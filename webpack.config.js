// entry -> output
const path=require("path")
const ExtractTextPlugin=require("extract-text-webpack-plugin")
//we use path.join(__dirname) due to diff operatWing system and computers paths
module.exports=(env,argv)=>{
const isProduction=env==="production";
const CSSExtract=new ExtractTextPlugin("styles.css");
return {
    entry:"./src/app.js",
    output:{
        path:path.join(__dirname,"public","dist"),
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
        use:CSSExtract.extract({
          use:[
            "css-loader",
            "sass-loader"
          ]
        })

      }
    ]
  },
  plugins:[
    CSSExtract
  ],
  devtool:isProduction?"source-map":"cheap-module-eval-source-map",
    devServer: {
    contentBase: path.join(__dirname, 'public'),
     
     historyApiFallback:true //to render HTTP URL send back to index.html
      ,publicPath:"/dist/"
           }
  //there's many devtools in webpack
  // devServer more faster also save Files

}
//loader , it's handling a behavior of files 
// loader as i teach webpack how to deal with babel , React
// rule what's will you make with rule
}

