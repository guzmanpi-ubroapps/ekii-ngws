/* eslint-disable */
/** @type {import('jest').Config} */
const config = {
  displayName: "shared-auth-lib / Shared Auth Library",
  coverageDirectory: "../../coverage/apps/shared-auth-lib",
  transform: {
    "^.+\\.(ts|mjs|js|html)$": "jest-preset-angular",
  },
  transformIgnorePatterns: ["node_modules/(?!.*\\.mjs$)"],
  snapshotSerializers: [
    "jest-preset-angular/build/serializers/no-ng-attributes",
    "jest-preset-angular/build/serializers/ng-snapshot",
    "jest-preset-angular/build/serializers/html-comment",
  ],
  verbose: true,
};

module.exports = config;
