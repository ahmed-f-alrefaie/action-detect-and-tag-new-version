import { createDefaultEsmPreset, type JestConfigWithTsJest } from 'ts-jest';

const presetConfig = createDefaultEsmPreset({
  //...options
});

const jestConfig: JestConfigWithTsJest = {
  ...presetConfig,
  clearMocks: true,
  moduleFileExtensions: ['js', 'ts'],
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
  testRunner: 'jest-circus/runner',
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^(\\.\\.?\\/.+)\\.js$': '$1',
  },
  transformIgnorePatterns: [],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};

export default jestConfig;