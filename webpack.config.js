const path = require('path')
const { DllReferencePlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  devtool: false,
  entry: {
    utils: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new DllReferencePlugin({
      name: '_dll_utils',
      manifest: require('./dist/utils.manifest.json')
    })
  ]
}