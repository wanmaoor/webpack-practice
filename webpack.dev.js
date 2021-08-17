const path = require('path')
const webpack = require('webpack') // 这里是为了引用webpack的内置插件
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const glob = require("glob");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const setMPA = () => {
    const entry = {}
    const htmlWebpackPlugins = []
    const entryFiles = glob.sync(path.join(__dirname, './src/*/index.js'))
    Object.keys(entryFiles).map(index => {
        const entryFile = entryFiles[index]
        const pageName = entryFile.match(/src\/(.*)\/index\.js/)[1]
        entry[pageName] = entryFile
        htmlWebpackPlugins.push(new HtmlWebpackPlugin({
            template: path.join(__dirname, `src/${pageName}/index.html`),
            filename: pageName + '.html',
            chunks: [pageName],
            inject: true,
            minify: {
                html5: true,
                collapseWhitespace: true,
                preserveLineBreaks: false,
                minifyCSS: true,
                minifyJS: true,
                removeComments: false
            }
        }))
    })
    return {
        entry,
        htmlWebpackPlugins
    }
}
const {entry, htmlWebpackPlugins} = setMPA()
module.exports = {
    mode: "development",
    entry,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.[name].js"
    },
    watch: true,
    module: {
        rules: [
            {
                test: /.js$/,
                use: 'babel-loader'
            },
            {
                test: /.css$/,
                use: ['style-loader', 'css-loader'] // css-loader将样式打包为common.js对象, style-loader将前者转换成style标签及其内部样式添加到html当中
            },
            {
                test: /.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /.(png|jpg|gif|jpeg)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        ...htmlWebpackPlugins
    ],
    devServer: {
        contentBase: './dist',
        hot: true
    },
    devtool: 'source-map'
}
