module.exports = {
  coverageReporters: ['text', 'lcov'],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  preset: 'ts-jest',
  testMatch: [
    '<rootDir>/src/**/*.test.ts',
  ],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  //transformIgnorePatterns: [
  //  'node_modules/(?!(testing-library__dom|@open-wc|lit-html|lit-element|pure-lit|lit-element-state-decoupler|lit|@lit)/)',
  //  ],
  testEnvironment: '@happy-dom/jest-environment',
  verbose: false,
};

