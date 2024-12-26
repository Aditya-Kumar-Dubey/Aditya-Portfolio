# TAXHELPLINE

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.10.

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


## ###############################################

# Project Structure

This document outlines the folder structure and organization of the project. Each folder serves a specific purpose to ensure a modular, scalable, and maintainable codebase. 🎯📂✨

## Overview

The project is divided into clearly defined sections, each handling specific aspects of the application. Below is a detailed breakdown of the structure. 📜🔍📌

## Root Directories

## src

The main source folder where the application code resides. It includes all core features, utilities, styles, and application-specific logic. 🛠️📂✅

## node_modules

Contains the installed dependencies and packages required for the project. Managed via npm or yarn. 📦📑🚀

## src Folder Structure

## @nirjai

Contains reusable framework utilities and shared logic that can be used across the application. Subfolders include: 🌟🧩📁

animations: Defines reusable Angular animations for the application.

components: Shared, reusable UI components.

directives: Custom Angular directives for enhanced functionality.

lib: External libraries or wrappers specific to the application.

pipes: Custom Angular pipes for transforming data.

services: Shared services for handling business logic and API calls.

styles: Global styling and theming files, including:

main.scss: The main SCSS file for global styles.

tailwind: Tailwind CSS configuration and utility styles.

validators: Custom form validators and validation logic.

version: Manages application versioning details.

## app

Contains the main application-specific code and feature modules. Subfolders include: 🏗️📊🛡️

core: Core functionalities that are critical to the application lifecycle, including:

guards: Route guards for authentication and authorization.

services: Core services used throughout the app.

utils: Utility functions and helpers.

features: Feature-specific modules, each representing a core functionality of the app:

auth: Handles user authentication and authorization.

our-services: Manages the "Our Services" section.

payments: Manages payment-related features.

track-request: Handles the "Track Request" functionality.

layout/components: Contains layout-specific components like:

footer: The footer component of the application.

header: The header component of the application.

shared: Contains shared modules, components, directives, and pipes that are reused across multiple features.

components: Shared UI components.

directives: Shared directives.

pipes: Shared data transformation pipes.

## Other Files in src

app.component.*: The root component files of the application.

app.config.ts: Configuration for the application.

app.config.server.ts: Server-specific configuration.

app.routes.ts: Defines the application's routing configuration. 🗺️🖇️📜

## assets

Contains static assets like images, icons, and other files. 🖼️📁🎨

## environments

Manages environment-specific configurations for development, staging, and production. 🌐🔧📊

## Notes

Modularity: The project is organized into feature modules to promote reusability and separation of concerns. ⚙️🧩📈

Scalability: The folder structure ensures easy scaling for future feature additions. 📐🔝🛠️

Styling: Global styles and theming are managed using SCSS and Tailwind CSS. 🎨💅✨