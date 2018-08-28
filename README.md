# Dating

This project developed by Angular2. Make sure you have installed node.js.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Style Guide
### Single responsibility
* A file defines one thing, such as a component, a service, a pipe, an directive.
* Each file is within 400 lines.
* Define a function with a single function.
* A function should not exceed 75 lines at most.
### Naming
* Do follow a pattern that describes the symbol's feature then its type. The recommended pattern is `feature.type.**.`.
  * Component ---   `***.component.ts|html|css`
  * Module ---   `***.module.ts`
  * Routing ---   `***-routing.module.ts`
  * Service ---   `***.service.ts`
  * Pipe ---   `***.pipe.ts`
  * Directive ---   `***.directive.ts`
  * Model ---   `***.model.ts`
  * Data ---   `***.data.ts`
* Do use dashes to separate words in the descriptive name. For example `hero-list.component.ts` 
* Do use upper camel case for class names, and same as the file name.
For example, the class name defined by `app.module.ts` is `AppModule`.<br/>
* Do use lower camel case for directive selector. For example `clickOutSide`
### Coding conventions
* Do use upper camel case when naming classes.
* Do declare variables with `const`.
* The naming of variables should be controlled within 3 words.
* Do use upper camel case for name an interface.
* Do use lower camel case for name properties and methods.
* Leaving one empty line between third party imports and application imports.



  




