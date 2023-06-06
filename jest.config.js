/** @type {import("ts-jest").JestConfigWithTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	moduleFileExtensions: ['js', 'json', 'ts'],
	rootDir: './',
	modulePaths: ['<rootDir>/src'],
	moduleNameMapper: {
		'@src(.*)$': '<rootDir>/src/$1',
	},
	testRegex: '.*\\.spec\\.ts$',
	transform: {
		'^.+\\.(t|j)s$': 'ts-jest',
	},
	collectCoverageFrom: ['**/*.(t|j)s'],
	coverageDirectory: './coverage',
	coveragePathIgnorePatterns: [
		'/node_modules/',
		'/dist/',
		'/.husky/',
		'/docs/',
		'/typeorm/',
		'/coverage/',
	],
	reporters: ['default', 'jest-junit'],
	coverageReporters: ['text', 'json-summary'],
	testTimeout: 10000,
};
