const { join } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const mode = process.env.NODE_ENV;
const prod = mode === "production";

module.exports = {
  mode,
  devtool: prod ? false : "source-map",
  entry: {
    bundle: ["./src/main.js"]
  },
  resolve: {
    extensions: [".mjs", ".js", ".svelte"],
    mainFields: ["svelte", "browser", "module", "main"]
  },
  output: {
    path: __dirname + "/build",
    filename: "[name].js",
    chunkFilename: "[name].[id].js"
  },
  devServer: {
    contentBase: join(__dirname, "build"),
    port: 5000
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        exclude: /node_modules/,
        use: {
          loader: "svelte-loader",
          options: {
            emitCss: true,
            hotReload: true
          }
        }
      },
      {
        test: /\.css$/,
        use: [prod ? MiniCssExtractPlugin.loader : "style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {}
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./src/index.html"
    })
  ]
};
