/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  restoreMocks: true,
  collectCoverageFrom: ["**/*.(t|j)s"],
  coverageDirectory: "./test/coverage",
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "js", "json", "node"],
};