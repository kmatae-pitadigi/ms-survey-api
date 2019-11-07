const TerserPlugin = require('terser-webpack-plugin');

module.exports = function(options) {
  return {
    ...options,
    mode: 'production',
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            keep_classnames: true,
            drop_console: true
          }
        })
      ]
    }
  }
}
