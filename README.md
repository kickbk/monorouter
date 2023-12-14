Hi Cedric,
This is a fork of [Ty's PR](https://github.com/tyrauber/expo-monorepo-example/tree/feat/nativewind) with very minor changes:

## SVG

Added `react-native-svg` and `react-native-svg-transformer` to the mobile app.

Updated [metro.config.js](./apps/mobile/metro.config.js) to support SVG imports

## Support dynamic imports in package

To support dynamic loading of svgs in `packages/icons`, I borrowed Evan's metroRequire solution in that package. It required three files additions: [metroRequire.d.ts](./packages/icons/metroRequire.d.ts), [declarations.d.ts](./packages/icons/declarations.d.ts) and adding these to [tsconfig](./packages/icons/tsconfig.json).

## Testing

You will find two identical components `<RootIcon>` that are loaded either **locally** from [apps/mobile/components](./apps/mobile/components/RootIcon.tsx) or from the custom package [packages/icons](./packages/icons/src/RootIcon.tsx).

When loaded **locally** from [apps/mobile/app/(tabs)/index.tsx](./apps/mobile/app/(tabs)/index.tsx), the icon appears on both the ios simulator and web.
However, when loaded from the package, it only loads in the ios simulator but returns an error when opening the app on web:
```js
Error: ENOENT: no such file or directory, open '.../monorouter/packages/icons/build/svgs?ctx=eec2920c0e33152cbcb0ed6384415969ee28698e'
```

To test, simply switch the imports of RootIcon in [apps/mobile/app/(tabs)/index.tsx](./apps/mobile/app/(tabs)/index.tsx).