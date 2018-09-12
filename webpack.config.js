// entry -> output
const path=require("path")
const ExtractTextPlugin=require("extract-text-webpack-plugin")
const webpack=require("webpack")
process.env.NODE_ENV=process.env.NODE_ENV||"development"
if(process.env.NODE_ENV==="test"){

  require("dotenv").config({path:".env.test"})

}else if(process.env.NODE_ENV==="development"){

 require("dotenv").config({path:".env.development"})

}
//process.env.NODE_ENV
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
    CSSExtract,  //will pass this values through bundle.js
    new webpack.DefinePlugin({
      "process.env.FIREBASE_API_KEY":JSON.stringify(process.env.FIREBASE_API_KEY),
      "process.env.FIREBASE_AUTH_DOMAIN":JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
      "process.env.FIREBASE_DATA_BASE_URL":JSON.stringify(process.env.FIREBASE_DATA_BASE_URL),
      "process.env.FIREBASE_PROJECT_ID":JSON.stringify(process.env.FIREBASE_PROJECT_ID),
      "process.env.FIREBASE_STORAGE_BUCKET":JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
      "process.env.FIREBASE_MESSAGING_SENDER_ID":JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)

    })
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

