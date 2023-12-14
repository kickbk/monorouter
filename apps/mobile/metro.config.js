const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, "../..");

// 1. Enable CSS for Expo.
const config = getDefaultConfig(projectRoot, {
  isCSSEnabled: true,
});
const { transformer, resolver } = config;

// Watch all files in the monorepo
config.watchFolders = [workspaceRoot];

// This is not needed for NativeWind, it is configuration for Metro to understand monorepos
config.transformer = {
  ...transformer,
  // Help babel transpile SVGs
  babelTransformerPath: require.resolve('react-native-svg-transformer'),
  unstable_allowRequireContext: true,
};
config.resolver = {
  ...resolver,
  // Force resolving nested modules to the folders below
  disableHierarchicalLookup: true,
  // Try resolving with project modules first, then workspace modules
  nodeModulesPaths: [
    path.resolve(projectRoot, 'node_modules'),
    path.resolve(workspaceRoot, 'node_modules'),
  ],
  // Add SVG extensions to metro resolver
  assetExts: resolver.assetExts.filter((ext) => ext !== 'svg'),
  sourceExts: [...resolver.sourceExts, 'svg'],
};

// 2. Enable NativeWind
const { withNativeWind } = require("nativewind/metro");
module.exports = withNativeWind(config, {
  // 3. Set `input` to your CSS file with the Tailwind at-rules
  input: "global.css",
  // This is optional
  projectRoot,
});
