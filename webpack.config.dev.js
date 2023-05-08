var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.ts',
  },
  output: {
    publicPath: '',
    path: __dirname + '/dist/src',
  },
  module: {
    rules: [
      {
        test: /.ts/,
        use: ['ts-loader'],
      },
      {
        test: /.scss/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /.html$/,
        use: ['html-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      publicPath: './src',
      inject: 'body',
    }),
  ],
};
