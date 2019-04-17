const merge = require('webpack-merge') // eslint-disable-line import/no-extraneous-dependencies
const common = require('./webpack.common')

module.exports = merge(common, {
    mode: 'production',
    entry: './src/Convertor.js',
})
