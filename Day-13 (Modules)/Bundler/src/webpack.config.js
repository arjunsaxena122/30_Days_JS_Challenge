import path from 'path'

exports = {
    entry: './src/index.js', // Entry point of your application
    output: {
      filename: 'bundle.js', // Output bundle file name
      path: path.resolve(__dirname, 'dist'), // Output directory
    },
    mode: 'development', // Mode (can be 'production' for optimized builds)
  };