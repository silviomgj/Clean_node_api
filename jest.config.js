
module.exports = {
  roots: ['<rootDir>/src'], 
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
   coverageDirectory: 'coverage',
   testEnvironment: 'node',
   trasnform: {
    '.+\\.ts': 'ts-jest'
  }
}
