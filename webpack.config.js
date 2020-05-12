const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  output: {
    path: path.join(__dirname, "/build"),
    publicPath: "/",
    filename: "bundle.js",
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".html", ".css", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"],
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|svg|woff)$/,
        loader: ("url-loader", "file-loader"),
        options: {
          limit: 25000,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve("./public/index.html"),
      filename: "index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProgressPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  devServer: {
    contentBase: "./build",
    historyApiFallback: true,
    hot: true,
    port: 3000,
    compress: true,
    publicPath: "http://localhost:3000/",
    watchOptions: {
      poll: true,
    },
  },
};
