const config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",

  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",   
  },

  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  
  // ✅ added
   moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|svg|webp|ttf|woff2?)$": "<rootDir>/__mocks__/fileMock.js",
  },
};

module.exports = config;