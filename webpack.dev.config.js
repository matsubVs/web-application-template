const path = require('path');

module.exports = {
    entry: ['babel-polyfill', './src/js/index.js'],
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "./build/js")
    },
    mode: "development",
    devServer: {
        open: true,
        port: 9100,
        hot: true,
        writeToDisk: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/env']
                    }
                },
                exclude: /node_modules/
            },
            { test: /\.svg$/, use: 'svg-inline-loader' },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
        ]
    }
}