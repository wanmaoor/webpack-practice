const path = require('path')
const webpack = require('webpack') // 这里是为了引用webpack的内置插件
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
    mode: "development",
    entry: {
        app: path.resolve(__dirname, 'src', 'index.js'),
        search: path.join(__dirname, '/src', '/search.js')
    },
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
        new CleanWebpackPlugin()
    ],
    devServer: {
        contentBase: './dist',
        hot: true
    }
}