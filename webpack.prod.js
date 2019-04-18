const merge = require('webpack-merge') // eslint-disable-line import/no-extraneous-dependencies
const common = require('./webpack.common')

module.exports = merge(common, {
    mode: 'development',
    entry: './src/Convertor.jsx',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                        ],
                    },
                },
            },
        ],
    },
})
