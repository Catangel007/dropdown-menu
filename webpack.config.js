 const path = require("path");
 const HtmlWebpackPlugin =require('html-webpack-plugin');

 module.exports={
    mode :"development",
    entry :path.resolve(__dirname,"./src/index.js"),
    output :{
        filename:"main.js",
        path: path.resolve(__dirname, "dist"),
        clean:true,
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.html",
        }),
      ],
      module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
 };