module.exports = {
  preset: 'react-native',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.jest.json',
    },
  },
  setupFilesAfterEnv: ['./src/jest.setup.ts'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
