const path = require('path');

module.exports = {
  entry: {
    'app/nginx/public/js/show': path.resolve(__dirname, 'app/assets/js/show'),
    'app/nginx/public/js/highlight.pack': path.resolve(__dirname, 'app/assets/js/highlight.pack'),
    'app/nginx/public/js/categoryEdit': path.resolve(__dirname, 'app/assets/js/categoryEdit'),
    'app/nginx/public/js/postEdit': path.resolve(__dirname, 'app/assets/js/postEdit'),
  },
  output: {
    path: path.resolve(__dirname),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  }
}
