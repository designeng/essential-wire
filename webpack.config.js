var webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: [
        __dirname + '/wire/wire.js'
        // __dirname + '/source/index.js'
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: './build/wire.build.js',
        libraryTarget: "umd",
        library: "wire"
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
    ],
    devtool: 'source-map'
}