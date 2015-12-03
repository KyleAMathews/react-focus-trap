module.exports = {
  entry: './example/index.jsx',

  output: {
    path: './example',
    publicPath: './example',
    filename: 'example.build.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: [ 'web_modules', 'node_modules', 'src', 'lib', __dirname ]
  },

  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },

  module: {
    loaders: [{
      test    : /\.jsx*$/,
      exclude : /node_modules/,
      loader  : 'babel-loader'
    }]
  }
}
