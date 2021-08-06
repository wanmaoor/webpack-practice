const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const InlineSourceWebpackPlugin = require('inline-source-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
    mode: "production",
    entry: {
        app: path.resolve(__dirname, 'src', 'index.js'),
        search: path.join(__dirname, '/src', '/search.js')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.[name].[chunkhash:8].js"
    },
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
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                            // plugins: () => [
                            //     require('autoprefixer')({
                            //         overrideBrowserslist: ['last 2 version', '>1%', 'ios 7'] // 使用率大于1%的浏览器
                            //     })
                            // ]
                            postcssOptions: {
                                plugins: [
                                    [
                                        "autoprefixer"
                                    ]
                                ]
                            }
                        }
                    }
                ]
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
        }),
        new OptimizeCSSAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano')
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/search.html'),
            filename: "search.html",
            chunks: ['search'],
            inject: true,
            minify: {
                html5: true,
                collapseWhitespace: true,
                preserveLineBreaks: false,
                minifyCSS: true,
                minifyJS: true,
                removeComments: false
            }
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html'),
            filename: "app.html",
            chunks: ['app'],
            inject: true,
            minify: {
                html5: true,
                collapseWhitespace: true,
                preserveLineBreaks: false,
                minifyCSS: true,
                minifyJS: true,
                removeComments: false
            }
        }),
        new InlineSourceWebpackPlugin({
            compress: true,
            rootpath: './src'
        }),
        new CleanWebpackPlugin()
    ]
}