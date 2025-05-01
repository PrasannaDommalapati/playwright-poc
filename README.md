# playwright-js-pom-framework
This project uses [Playwright](https://playwright.dev) for end-to-end browser testing.

A Playwright automation framework using JavaScript, designed with a Page Object Model (POM) for enhanced test coverage. This repository demonstrates scalable test automation with reusable components.

## Installation

To set up the Playwright project on your local machine, follow these steps:

### Prerequisites
1. **Node.js**: 
Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/). 
To check if Node.js is installed, run 
     ```bash
     node -v
     ```

3. **npm**: 
npm (Node Package Manager) comes with Node.js. 
Check if npm is installed by running
     ```bash
     npm -v
     ```


### Step-by-Step Installation
1. **Clone the Repository**: 
Clone this repository to your local machine using Git.
Open your terminal and run 
     ```bash
     git clone https://github.com/PrasannaDommalapati/playwright-poc
     ```

3. **Navigate to the Project Directory**:
Open project directory 

4. **Install Dependencies**:
Install the project dependencies using npm >>
     ```bash
     npm install
     ```

# 🎭 Playwright Testing Scripts

## 📦 Setup

Install the required browsers:

```bash
npm run install-playwright
```

## 🧪 Running Tests

### Run All Tests (Headless)

```bash
npm test
```

Runs all Playwright tests in headless mode. Ideal for CI pipelines or fast local execution.

### Run Tests in UI Mode

```bash
npm run test:ui
```

Launches the Playwright Test UI to explore, debug, and re-run individual tests interactively.

## 🧭 Generate Tests with Codegen

```bash
npm run codegen
```

Opens a browser and records your actions to generate test scripts automatically.

## 📁 Environment Variables

Create a `.env` file in the root directory to store sensitive values like login credentials:

```env
EMAIL=testuser@example.com
PASSWORD=securePassword123
```

These values can be accessed in your tests via `process.env.EMAIL` and `process.env.PASSWORD`.

## ⚙️ Configuration

- Tests are typically located in the `tests/` folder.
- Configure Playwright using `playwright.config.js`.

For more, visit the [Playwright documentation](https://playwright.dev/docs/intro).


### Running Test
1. **Open Playwright**:
To Open the Playwright UI mode 
```bash 
npx playwright test --ui
```

2. **Run tests**:
Click on demo.spec.js or tests file to start the tests
