# EkiiNgws / Ekiim Angular Workspace

This project uses [Angular CLI](https://github.com/angular/angular-cli) version 14.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Setting up Jest for New Projects

1. Remove projects/<project_name>/karma.conf.js file.

2. Remove projects/<project_name>/src/test.ts file.

3. In projects/<project_name>/tsconfig.spec.json file (used by Jest):

- Replace jasmine in types array with jest for specs to ne type-checked against Jest typings.
- Remove test.ts entry from files array.

4.  In angular.json file:

- Remove "karmaConfig" from projects/project_name/architect/test
- Remove path from projects/project_name/architect/test/builder/options/polyfills and put file into an array.

- Remove path from projects/project_name/architect/test/builder/options/tsConfig.

```
"projects": {
    ...
    "[project_name]": {
         ...
         "architect": {
                ...
                "test": {
                "builder": "@angular-builders/jest:run",
                    "options": {
                        "polyfills": ["polyfills.ts"],
                        "tsConfig": "tsconfig.spec.json",
                        "assets": [
                        "projects/<project_name>/src/favicon.ico",
                        "projects/<project_name>/src/assets"
                        ],
                        "styles": ["projects/<project_name>/src/styles.css"],
                        "scripts": []
                    }
                }
            ...
        ...
    ...
...
```

5. Create the following file in projects/<project_name>/jest.config.js

- Modify displayName and coverageDirectory

```
/* eslint-disable */
/** @type {import('jest').Config} */
const config = {
  displayName: "ekibiz-app / Ekiim Business",
  coverageDirectory: "../../coverage/apps/ekibiz-app",
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
```

# Setting up ESLint for New Projects

ng g @angular-eslint/schematics:add-eslint-to-project <project_name>
