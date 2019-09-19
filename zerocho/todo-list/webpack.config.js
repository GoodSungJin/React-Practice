const path = require('path');

module.exports = {
  name: 'todo-list',
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
          // 모든 브라우저를 가능하게 해줌
          ['@babel/preset-env', {
            targets: {
              // 브라우저 어디까지 호환할꺼니? browserslist
              browsers: ['> 5% in KR'],
            },
            debug: true,
          }],
          '@babel/preset-react'
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          'react-hot-loader/babel'
        ]
      }
    }]
  },
  // 출력
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },
};