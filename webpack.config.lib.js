module.exports = {
  mode: 'development',
  entry: {
    index: './lib/index.ts',
  },
  experiments: {
    outputModule: true,
  },
  output: {
    publicPath: '',
    path: __dirname + '/_lib',
    libraryTarget: 'commonjs2',
    filename: '[name].js',
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
    ],
  },
};
