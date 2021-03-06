
module.exports = {
    publicPath: './',
    lintOnSave: false,
    runtimeCompiler: true,
    pages: {
        index: {
            entry: 'src/main.js',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        }
    },
    devServer: {
        overlay: {
            warnings: true,
            errors: true
        },
        port: 1025,
        compress: true,
        open:'chrome',
    }
};

