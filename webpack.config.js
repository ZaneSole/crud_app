const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: ["babel-polyfill", path.join(__dirname, "./src/index.js")],
    output: {
        path: path.resolve(__dirname, "./dist")
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env","@babel/preset-react"]
                }
            }
        },{
            test: /\.css$/,
            use: [{
                loader: 'style-loader'
            },{
                loader: 'css-loader'
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "./src", "index.html")
        })
    ]
}