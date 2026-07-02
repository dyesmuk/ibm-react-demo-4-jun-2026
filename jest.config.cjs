/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'jsdom',

  // Registers jest-dom's matchers (toBeInTheDocument, etc.) globally.
  // Pointing straight at the package works because it registers itself
  // as a side effect on import -- no wrapper file needed.
  setupFilesAfterEnv: ['@testing-library/jest-dom'],

  // Babel config lives here (rather than a root babel.config.cjs) so it's
  // scoped to Jest only. A root babel.config.cjs would also get picked up
  // by @vitejs/plugin-react's Fast Refresh transform in dev -- we don't
  // want test-only Babel settings leaking into the Vite dev server.
  transform: {
    '^.+\\.(t|j)sx?$': [
      'babel-jest',
      {
        presets: [
          ['@babel/preset-env', { targets: { node: 'current' } }],
          ['@babel/preset-react', { runtime: 'automatic' }],
          '@babel/preset-typescript',
        ],
      },
    ],
  },

  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },

  testMatch: ['<rootDir>/src/**/*.test.(ts|tsx)'],

  // Avoids the "Haste module naming collision" warning if a stray
  // package.json exists elsewhere in the repo (e.g. a leftover /files folder).
  modulePathIgnorePatterns: ['<rootDir>/files/'],
};
