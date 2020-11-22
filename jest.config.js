/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
	displayName: {
		name: 'template',
		color: 'blue',
	},
	preset: 'ts-jest',
	collectCoverageFrom: ['**/src/**/*.{js,ts,tsx}', '!**/testingUtils/**'],
	coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/src/testingUtils/**'],
	verbose: true,
	notify: true,
	notifyMode: 'failure',
	testMatch: ['**/src/__tests__/*.{js,ts,tsx}', '**/*test*.{js,ts,tsx}'],
	watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
	setupFilesAfterEnv: [path.resolve(__dirname, 'src', 'setupTests.ts')],
	snapshotSerializers: ['jest-styled-components/serializer'],
};
