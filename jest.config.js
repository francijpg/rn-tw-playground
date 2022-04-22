// const { pathsToModuleNameMapper } = require('ts-jest');
// const { compilerOptions } = require('./tsconfig.json');

// const paths = compilerOptions.paths ? compilerOptions.paths : {};

// module.exports = {
//   preset: 'ts-jest',
//   testEnvironment: 'jest-environment-jsdom',
//   globals: {
//     'ts-jest': {
//       tsConfig: 'tsconfig.jest.json',
//     },
//   },
//   setupFilesAfterEnv: ['./jest.setup.ts', '@testing-library/jest-dom'],
//   modulePathIgnorePatterns: ['dist'],
//   coverageReporters: ['text', 'text-summary', 'clover', 'cobertura'],
//   collectCoverageFrom: ['**/*.ts', '**/*.tsx'],
//   coverageThreshold: {
//     global: {
//       statements: 80,
//       branches: 80,
//       functions: 80,
//       lines: 80,
//     },
//   },
//   moduleNameMapper: {
//     ...pathsToModuleNameMapper(paths, { prefix: '<rootDir>/' }),
//     '\\.(scss|sass|css)$': 'identity-obj-proxy',
//   },
// };
module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};
