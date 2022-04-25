module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        safe: false,
        allowUndefined: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@src': './src',
          '@components': './src/components',
          '@entities': './src/entities',
          // components: './src/components',
          // services: './src/services',
          // entities: './src/entities',
        },
      },
    ],
  ],
};
