#!/usr/bin/env node

import inquirer from "inquirer";
import fsExtra from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import { execa } from "execa";

// Get the directory name from import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createProject() {
  try {
    // Prompt user for preferences
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "projectName",
        message: "Please provide a name for the project. (my-app)",
        default: 'my-app'
      },
      {
        type: "list",
        name: "framework",
        message: "Which framework would you like to use?",
        choices: ["vite", "create-react-app"],
      },
      {
        type: "list",
        name: "language",
        message: "Which language would you like to use?",
        choices: ["JavaScript", "TypeScript"],
      },
    ]);

    const { framework, language, projectName } = answers;    
    const projectPath = path.join(process.cwd(), projectName);
    const customSrcPath = path.join(
      __dirname,
      "folder-structures",
      framework,
      `src-with-${language.toLowerCase()}`
    );

    // Create the project based on user preference
    if (framework === "vite") {
      await execa(
        "npm",
        [
          "create",
          "vite@latest",
          projectName,
          "--",
          "--template",
          `react${language === "TypeScript" ? "-ts" : ""}`,
        ],
        { stdio: "inherit" }
      );
    } else if (framework === "create-react-app") {
      if (language === "TypeScript") {
        await execa(
          "npx",
          ["create-react-app", projectName, "--template", "typescript"],
          { stdio: "inherit" }
        );
      } else {
        await execa("npx", ["create-react-app", projectName], {
          stdio: "inherit",
        });
      }
    }

    console.log("Installing dependencies!");

    // Install dependencies in the new project directory
    await execa("npm", ["install", "react-router-dom", "apisauce"], {
      cwd: projectPath,
      stdio: "inherit",
    });
    console.log("Dependencies being installed.");

    // Define paths for copying src
    const targetSrcPath = path.join(projectPath, "src");

    // Copy the appropriate src folder
    await fsExtra.copy(customSrcPath, targetSrcPath, { overwrite: true });

    console.log("React project created and customized successfully!");
  } catch (error) {
    console.error("Error during project creation:", error);
  }
}

createProject();
