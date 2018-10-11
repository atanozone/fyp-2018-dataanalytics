const webpack = require('webpack');
const path = require('path');

const PATHS = {
    react: path.join(__dirname, 'node_modules/react/dist/react.min.js'),
    app: path.join('src'),
    build: path.join('static/frontendreact')
};
console.log(PATHS);

module.exports = {
    module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
        test: /\.(pdf|jpg|png|gif|svg|ico)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                publicPath:PATHS.build
              }
          }
        ]
        },
        {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [ 'style-loader', 'css-loader' ],
        },
    ]
    }
};
