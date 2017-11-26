module.exports = {
    entry: {
        app: './js/main.js'
    },
    output: {
        filename: 'build.js',
        path: __dirname + '/dist',
        publicPath:  "/webpack-demo/",
        library: 'myLibrary',
        libraryTarget: 'var'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    devtool: 'source-map'
};