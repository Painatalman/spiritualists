module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.test.json',
    },
  },
  setupFiles: ['dotenv/config'],
  preset: 'ts-jest',
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/src/$1',
  },
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['jest-extended', '<rootDir>/jest-setup.ts'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
