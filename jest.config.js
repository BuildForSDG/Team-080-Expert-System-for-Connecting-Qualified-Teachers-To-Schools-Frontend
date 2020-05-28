module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'png'],
  moduleDirectories: ["node_modules"],
  rootDir: '__tests__',
  testRegex: ['.spec.js$', '.test.js$'],
  coverageDirectory: './coverage',
  testEnvironment: 'node',
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  moduleNameMapper: {
      "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js"
  }
};
