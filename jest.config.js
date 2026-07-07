/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ["<rootDir>/src/test/setup.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "moduleNameMapper": {
    "^.+\\.css$": "identity-obj-proxy"
  },
  // Band-aid: @openstax/ts-utils ships ESM under its "browser"/"import" export
  // conditions, which the jsdom test environment resolves by default, and ts-jest
  // only transforms .tsx? — so Jest chokes on the untransformed `export` syntax.
  // Forcing the CJS ("require") condition sidesteps it. Remove during the Vitest
  // migration (Vitest handles ESM natively; see frontend/admin packages elsewhere).
  testEnvironmentOptions: {
    customExportConditions: ['require', 'node'],
  },
};
