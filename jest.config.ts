import { createDefaultEsmPreset, type JestConfigWithTsJest } from 'ts-jest';

const presetConfig = createDefaultEsmPreset({
  tsconfig: {
    module: 'ESNext',
    moduleResolution: 'bundler',
    isolatedModules: true,
  },
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
};

export default jestConfig;