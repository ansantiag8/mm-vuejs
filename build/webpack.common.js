const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/mm-vuejs.js',
  },
  output: {
    filename: 'mm-vuejs.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': path.join(__dirname, '..', 'src'),
    },
    extensions: ['.js', '.vue', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            postcss: ['vue-style-loader'].concat([
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true,
                },
              },
            ]),
          },
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.join(__dirname, '..', 'src')],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
};
