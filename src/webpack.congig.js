const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  // Other configurations...
  plugins: [
    new NodePolyfillPlugin(),
  ],
  resolve: {
    fallback: {
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "buffer": require.resolve("buffer"),
      "assert": require.resolve("assert"),
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "os": require.resolve("os-browserify/browser"),
      "url": require.resolve("url"),
    },
  },
};
