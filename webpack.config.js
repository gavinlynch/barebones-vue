console.log(__dirname + '/dist');

module.exports = {
  entry: './public/js/src/main.js',
  output: {
    path: __dirname + '/public/js/dist',
    filename: 'build.js',
    publicPath: "/js/dist"
  },
  devServer: {
    contentBase: "./public",
    hot: true,
    inline: true
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
    }]
  },
  resolve: {
    alias: {
      vue: __dirname + '/node_modules/vue/dist/vue.js'
    }
  }
};
