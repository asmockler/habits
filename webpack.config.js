var path = require('path'),
    srcPath = path.join(__dirname, 'src')

module.exports = {
  entry: path.join(srcPath, 'app.js'),
  output: {
    path: path.join(__dirname, 'tmp'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css-loader" },
      { test: /\.scss$/, loader: "style!css-loader!sass-loader" },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    // Resolves extensions so you can import from 'file' instead of 'file.js'
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules', 'src'],
    root: srcPath,
  },
  devServer: {
    contentBase: './tmp'
  }
}
