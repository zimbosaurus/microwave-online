
const path = require('path');

module.exports = {
    mode: "development",
    entry: {
        index: './src/index'
    },
    output: {
        path: path.resolve(__dirname + "/dist"),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                exclude: /(.css)/,
                include: [
                    path.resolve(__dirname + "/src")
                ],
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
                    plugins: [
                        "react-hot-loader/babel"
                    ]
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ],
    },
    resolve: {
        extensions: [
            '.js', '.tsx', '.ts', '.jsx'
        ],
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    }
};
