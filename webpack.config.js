const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const jsxLoader = {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    options: {
        presets: [
            [
                '@babel/preset-react',
                {
                    runtime: 'automatic'
                }
            ],
            '@babel/preset-env'
        ]
    }
};
const htmlLoader = {
    test: /\.html$/,
    use: [
            {
            loader: "html-loader"
        }
    ]
};
const styleLoader = {
    test: /\.(s[ac]ss)$/i,
    use: [
        "style-loader",
        "css-loader",
        "sass-loader"
    ]
};
const imageLoader = {
    test: /\.(jpg|jpeg|svg|png|webp|gif)$/,
    type: "asset"
};
const videoLoader = {
    test: /\.mp4$/,
    use: [
        {
            loader: "file-loader",
            options: {
                name: "[name].[ext]",
                outputPath: "video",
            }
        }
    ]
};
const fontsLoader = {
    test: /\.(woff|woff2)/i,
    type: 'asset/resource',
    /*use: {
        loader: 'url-loader'
    }*/
}

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle[hash].js",
        publicPath: "/",
    },
    mode: "development",
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            Assets: path.resolve(__dirname, './src/Assets/'),
            Styles: path.resolve(__dirname, './src/Styles'),
            Pages: path.resolve(__dirname, './src/Pages'),
            Components: path.resolve(__dirname, './src/Components')
        }
    },
    module: {
        rules: [
            jsxLoader,
            htmlLoader,
            styleLoader,
            imageLoader,
            videoLoader,
            fontsLoader
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "[name][hash].css"
        }),
    ],
    devServer: {
        allowedHosts: path.dirname(__dirname, "dist"),
        port: 3000,
        compress: true,
        historyApiFallback: true,
    }
}
