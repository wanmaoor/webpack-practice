const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    mode: "production",
    entry: {
        app: path.resolve(__dirname, 'src', 'index.js'),
        search: path.join(__dirname, '/src', '/search.js')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.[name].[chunkhash].js"
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
                use: [MiniCssExtractPlugin.loader, 'css-loader'], // css-loader将样式打包为common.js对象, style-loader将前者转换成style标签及其内部样式添加到html当中

            },
            {
                test: /.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            },
            {
                test: /.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].[hash:8].[ext]'
                        }
                    }
                ],

            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash:8].css'
        })
    ]
}