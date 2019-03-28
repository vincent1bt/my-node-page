const path = require('path');

module.exports = {
  entry: {
    'app/nginx/public/blog/js/show': path.resolve(__dirname, 'assets/js/show'),
    'app/nginx/public/blog/js/highlight.pack': path.resolve(__dirname, 'assets/js/highlight.pack'),
    'app/nginx/public/blog/js/categoryEdit': path.resolve(__dirname, 'assets/js/categoryEdit'),
    'app/nginx/public/blog/js/postEdit': path.resolve(__dirname, 'assets/js/postEdit'),
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
