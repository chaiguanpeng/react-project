let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode:"development",
    entry: './src/index.js',
    output: {
        path: path.resolve('./dist'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.(jpg|png|gif)$/, use: "file-loader"}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:"./index.html"
        })
    ]

};