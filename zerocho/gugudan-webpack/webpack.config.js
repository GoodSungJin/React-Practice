const path = require('path');

module.exports = {
  name: 'gugudan-setting',
  mode: 'development',  // 서비스: production
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  // 입력
  entry: {
    app: ['./client'],
  },

  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              browserse: ['last 2 chrome versions'],
            }
          }],
          '@babel/preset-react'
        ],
      }
    }]
  },
  // 출력
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },
};