/**
 * Created by admin on 2017/2/17.
 */
// import path from "path"
// import HtmlWebpackPlugin from "html-webpack-plugin"
// import OpenBrowserWebapckPlugin from "open-browser-webpack-plugin"

var path=require("path")
var HtmlWebpackPlugin=require("html-webpack-plugin")
var OpenBrowserWebapckPlugin=require("open-browser-webpack-plugin")

// export default {
module.exports={
    entry:{
        bundle:"./src/index.js"
    },
    output:{
        path:path.resolve(__dirname,"build"),
        filename:"[name].js"
    },
    module:{
        // rules:[
        loaders:[
            {
                test:/\.jsx?$/,
                // use:"babel-loader",
                loader:"babel-loader",
                include:path.resolve(__dirname,"src"),
                exclude:path.resolve(__dirname,"node_modules")
            },
            {
                test:/\.css$/,
                // use:["style-loader","css-loader"]
                loader:["style-loader","css-loader"]
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                // use: "file-loader"
                loader: "file-loader"
            },
            {
                test: /\.(woff|woff2)(\?v=\d\.\d+\.\d+)?$/,
                // use: "url-loader?limit=10000&mimetype=application/font-woff"
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                // use: "url-loader?limit=10000&mimetype=application/octet-stream"
                loader: "url-loader?limit=10000&mimetype=application/octet-stream"
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                // use: "url-loader?limit=10000&mimetype=image/svg+xml"
                loader: "url-loader?limit=10000&mimetype=image/svg+xml"
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin(
            {title:"hello test22"}
        ),
        new OpenBrowserWebapckPlugin(
            {url:"http://localhost:8080/"}
        )
    ]
}







