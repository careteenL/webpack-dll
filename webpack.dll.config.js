const path = require('path')
const { DllPlugin } = require('webpack')
module.exports = {
  mode: 'development',
  devtool: false,
  entry: {
    utils: ['isarray', 'is-promise']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'utils.dll.js',
    library: '_dll_utils'
  },
  plugins: [
    new DllPlugin({
      name: '_dll_utils',
      path: path.join(__dirname, 'dist', 'utils.manifest.json')
    })
  ]
}