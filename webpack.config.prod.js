const baseConfig = require('./webpack.config.base')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const merge = require('webpack-merge')

module.exports = merge(baseConfig, {
    mode: 'production',
    plugins: [
        new BundleAnalyzerPlugin()
    ]
})