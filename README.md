# Playwright Project Generator

A CLI tool that scaffolds a new Playwright + TypeScript testing project, installs dependencies, initializes Git, and generates a site configuration file from user input.

## Features

- Creates a new project directory
- Copies a predefined project template
- Initializes a Git repository
- Generates a default `package.json`
- Installs Playwright, TypeScript, and Node.js typings
- Installs Playwright browsers
- Interactively collects website names and URLs
- Generates a strongly typed `sites/sites.ts` configuration file

## Installation

Install dependencies and make the CLI available in your environment.

```bash
npm install
npm link
```

## Usage

Run the CLI and provide a project name when prompted.

```bash
project-generator
```

Example:

```bash
Project name?
my-playwright-project
```

The tool will:

1. Create the project directory.
2. Copy template files into the project.
3. Initialize Git.
4. Create a default `package.json`.
5. Install Playwright and TypeScript dependencies.
6. Install Playwright browsers.
7. Prompt for site definitions.

Example workflow:

```bash
Project name?: my-playwright-project
Site name (leave empty to finish): Google
Base URL: https://www.google.com
Site name (leave empty to finish): GitHub
Base URL: https://github.com
Site name (leave empty to finish):
Press Enter on an empty site name to finish.
```

## Generated Configuration

The tool creates:

sites/sites.ts

Example generated content:

- Google → https://www.google.com
- GitHub → https://github.com

All entered sites are exported as a centralized site configuration that can be consumed by Playwright tests and utilities.

## Project Structure

project-name/
├── package.json
├── playwright.config.ts
├── tests/
├── sites/
│   └── sites.ts
└── ...

The actual structure depends on the contents of the template directory.

## Dependencies

### Runtime

- prompts - Interactive command-line prompts

### Development

- @playwright/test - Playwright testing framework
- typescript - TypeScript compiler
- @types/node - Node.js type definitions

## Workflow

Prompt for project name
↓
Create project folder
↓
Copy template files
↓
Initialize Git
↓
Initialize package.json
↓
Install dependencies
↓
Install Playwright browsers
↓
Collect site definitions
↓
Generate sites/sites.ts

