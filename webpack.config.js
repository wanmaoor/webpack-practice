const path = require('path')
module.exports = {
    mode: "production",
    entry: {
        app: path.resolve(__dirname, 'src', 'index.js'),
        search: path.join(__dirname, '/src', '/search.js')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.[name].js"
    },
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
            }
        ]
    }
}