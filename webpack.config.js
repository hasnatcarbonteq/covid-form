const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    output: {
        path: path.resolve(__dirname, 'src/index.js'),
        filename: 'index.bundle.js'
    },
    devtool: 'source-map',
    devServer: {
        port: 3000,
        watchContentBase: true,
        contentBase: path.resolve(__dirname, 'src'),
        hot: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader", // translates CSS into CommonJS
                    },
                    {
                        loader: "less-loader", // compiles Less to CSS
                        options: {
                            lessOptions: {
                                modifyVars: {
                                    'primary-color': '#1DA57A',
                                    'link-color': '#1DA57A',
                                    'border-radius-base': '2px',
                                    'text-color-secondary': '#5B6BF4',
                                    'error-color': '#FE3180' // error state color
                                },
                                javascriptEnabled: true,
                            },
                        }
                    },
                ],
            },
            {
                // Now we apply rule for images
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        // Using file-loader for these files
                        loader: "file-loader",
                        // In options we can set different things like format
                        // and directory to save
                        options: {
                            name: "[path][name].[ext]",
                            outputPath: "images",
                        },
                    },
                ],
            },
            {
                // Apply rule for fonts files
                test: /\.(woff|woff2|ttf|otf|eot)$/,
                use: [
                    {
                        // Using file-loader too
                        loader: "file-loader",
                        options: {
                            outputPath: "fonts",
                        },
                    },
                ],
            },
        ]
    },
    plugins: [
        new Dotenv(),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: "bundle.css",
        }),
        new HtmlWebpackPlugin({
            title: "covid-form",
            template: "./src/index.html",
            chunks: ["app", "styles"],
        }),
    ]
}