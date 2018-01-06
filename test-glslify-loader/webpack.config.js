const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')


const fileName = process.argv[process.argv.length - 1]

const config = () => ({
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: `[name].bundle-[hash].js`,
  },
  module: {
    rules: [{
      test: /\.(glsl|frag|vert)$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'raw-loader',
      }
    }, {
      test: /\.(glsl|frag|vert)$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'glslify-loader',
      }
    }]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: './src/public/index.html',
    }),
  ]
})

module.exports = config
