const { pathsToModuleNameMapper } = require("ts-jest/utils");
const {
  compilerOptions: { paths: tsconfigPaths },
} = require("./tsconfig");

module.exports = {
  roots: ["<rootDir>"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleFileExtensions: ["ts", "tsx", "js", "json", "jsx"],
  testPathIgnorePatterns: ["<rootDir>[/\\\\](node_modules|.next)[/\\\\]"],
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$"],
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
  },
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "\\.(gif|ttf|eot|svg|png)$": "test-file-stub",
    ...pathsToModuleNameMapper(tsconfigPaths, { prefix: "<rootDir>/src" }),
  },
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/src/create.theme.ts",
    "!**/src/tests-related/**",
    "!**/src/api/hooks/**",
  ],
};
