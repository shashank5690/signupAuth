const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { transformSync } = require('@babel/core');
const fs = require('fs');
const path = require('path');

// Define the path to the SVG transformer
const svgTransformerPath = require.resolve('react-native-svg-transformer');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    babelTransformerPath: svgTransformerPath,
    // Optionally you can add other transformers if needed
  },
  resolver: {
    assetExts: ['png', 'jpg', 'jpeg', 'gif', 'webp'], // Add other asset types here
    sourceExts: ['js', 'jsx', 'ts', 'tsx', 'svg'], // Include 'svg' here
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
