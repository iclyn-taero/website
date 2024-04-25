const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {},
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html', // path to your index.html file
    }),
  ],
};