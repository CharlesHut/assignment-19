const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
module.exports = {
  entry: {
    main: './src/js/index.js',
    install: './src/js/install.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      title: 'jate'
    }),
    new InjectManifest({
      swSrc: './src-sw.js',
      swDest: 'service-worker.js'
    }),
    new WebpackPwaManifest({
      fingerprints: false,
      inject: true,
      name: 'jate',
      short_name: 'jate',
      description: 'A simple text editor application',
      background_color: '#ffffff',
      theme_color: '#000000',
      start_url: './',
      publicPath: './',
      icons: [
        {
          src: path.resolve('src/images/logo.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join("assets",'icons')
        }
      ]
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
             plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
// TODO: Add CSS loaders and babel to webpack.
   
