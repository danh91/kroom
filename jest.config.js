module.exports = {
  verbose: true,
  projects: [
    {
      preset: 'ts-jest',
      testEnvironment: 'node',
      displayName: 'auth',
      setupFilesAfterEnv: ['./packages/core/test/setup.ts'],
      testMatch: ['<rootDir>/src/auth/**/*.test.ts'],
    },
  ],
};
