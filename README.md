# react-boilerplate-generator

This CLI tool helps you quickly create and customize React projects using either Vite or Create React App. It also allows you to choose between JavaScript and TypeScript, and installs additional dependencies like `react-router-dom` and `apisauce`. Furthermore, it customizes the project by copying predefined source files.

## Features and Highlights

This CLI tool not only scaffolds a basic React project but also includes a robust project structure and additional features to help streamline development.

### 1. **Full-Fledged Project Structure**
   - **Component and Page Organization**: The project structure is organized with separate folders for components and pages. Pages are further divided into `Auth` and `Main` pages to simplify route management and code organization.
   - **Images**: A folder structure is included for storing images and other assets, making it easy to manage resources within the project.

### 2. **React Router DOM Setup**
   - **Multiple Routers**: The project comes pre-configured with `react-router-dom`, setting up two routers to handle both authentication routes (e.g., login, signup) and main application routes (e.g., dashboard, home).
   - **Navigation Structure**: The routing structure is modular, allowing easy expansion as the project grows.

### 3. **Context API and Custom Hook**
   - **Global State Management**: The project includes a setup for the Context API, allowing you to manage global state across the entire application.
   - **Custom Hook**: A custom hook is provided to simplify accessing global values from the Context API, making state management more intuitive and less error-prone.

### 4. **Local Storage Methods**
   - **Get and Set Methods**: Utility methods for interacting with `localStorage` are included. These methods make it easier to store and retrieve values from `localStorage`, providing a consistent API across your application.

### 5. **API Layer with `apisauce`**
   - **API Setup**: The project includes an API layer set up using `apisauce`. This provides a structured way to handle API requests and responses, with built-in error handling and response normalization.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Usage

You can run the CLI tool directly through `npx` without cloning the repository:

```bash
npx your-cli-package-name
