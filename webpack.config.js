const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// source map
// html plug in
// babel loader
// css loader
// dev server

module.exports = {
  module: {
    rules: [{
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              "@babel/preset-react"
            ]
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  },
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'bundled'),
  },
  mode: "development", // production
  devtool: "source-map",
  plugins: [new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'src/index.html'
    })
  ],
  devServer: {
    client: {
      overlay: {
        warnings: false,
      },
    },
    static: {
      directory: path.join(__dirname, 'bundled'),
    },
    compress: true,
    port: 9000,
  },
};
