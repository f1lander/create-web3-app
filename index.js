#!/usr/bin/env node

import chalk from 'chalk';
import { Command } from 'commander';
import fs from 'fs-extra';
import inquirer from 'inquirer';
import ora from 'ora';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const program = new Command();

program
  .name('create-web3-app')
  .description('Create a new Next.js application with custom template')
  .argument('[project-directory]', 'Project directory name')
  .version('1.0.0')
  .action(async (projectDirectory) => {
    try {
      // If project directory is not provided, prompt for it
      const answers = await inquirer.prompt([
        {
          type: 'input',
          name: 'projectName',
          message: 'What is the name of your project?',
          default: projectDirectory || 'my-nextjs-app',
          when: !projectDirectory,
          validate: (input) => {
            if (/^([A-Za-z\-_\d])+$/.test(input)) return true;
            return 'Project name may only include letters, numbers, underscores and hashes.';
          },
        },
      ]);

      const targetDir = projectDirectory || answers.projectName;
      const spinner = ora('Creating project...').start();

      // Check if directory exists
      if (fs.existsSync(targetDir)) {
        spinner.fail(chalk.red(`Directory ${targetDir} already exists.`));
        process.exit(1);
      }

      // Copy template
      const templateDir = path.join(__dirname, 'template');
      await fs.copy(templateDir, targetDir);

      // Update package.json
      const packageJsonPath = path.join(targetDir, 'package.json');
      const packageJson = await fs.readJson(packageJsonPath);
      packageJson.name = targetDir;
      await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });

      spinner.succeed(chalk.green(`Project created successfully in ${targetDir}`));
      
      console.log('\nNext steps:');
      console.log(chalk.cyan(`  cd ${targetDir}`));
      console.log(chalk.cyan('  npm install (or yarn install, pnpm install, bun install)'));
      console.log(chalk.cyan('  npm run dev'));
      
    } catch (error) {
      console.error(chalk.red('Error creating project:'), error);
      process.exit(1);
    }
  });

program.parse();