

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

## @aditya

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

auth: Handles user authentication and authorization.

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