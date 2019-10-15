# Atölye15 - Web Starter Kit

> ⚠️ **ATTENTION**: This project is in heavily under development! Documentation will be updated later.

Web Starter Kit is a starter package designed for front-end developers of Atölye15. Its main goals are to save developers from redundant work needs to be done at every project's start and also creating consistent code bases between developers.

## Includes

- Twig (HTML Templating System)
- Sass (CSS extension language)
- Babel & ES2015 (Javascript compiler)
- Eslint
- Stylelint

and many more

## System Requirements

- [Node.js](http://nodejs.org/)
- [Yarn](https://yarnpkg.com/lang/en/)
- [Git](http://git-scm.com/)

## Browser Support

- Chrome
- Edge
- Firefox
- Safari

## Features

| Feature                  | Description                                                                                                              |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| Easy Initialization      | You can start to code right after you've completed the initial setup.                                                    |
| Sass Support             | Web Starter Kit contains a SASS compiler. Basic variables, mixins and functions are ready to use.                        |
| Performance Optimization | Images, Javascript, and CSS files are minified.                                                                          |
| HTML Templating Engine   | Web Starter Kit uses the twig.js templating engine.                                                                      |
| Code Linting             | Web Starter Kit contains configuration files for Stylelint and Eslint. You will find bugs and errors before they happen. |
| ES2015 Support           |                                                                                                                          |

## Setup

### 1. Installing Web Starter Kit

You can download the latest version of Web Starter Kit [here](https://github.com/atolye15/web-starter-kit) or clone this repository by typing in the terminal

```bash
git clone git@github.com:atolye15/web-starter-kit.git my-new-project
```

### 2. Setting Up Git

```bash
cd my-new-project

# Remove .git folder to remove git history and initialize a new one
rm -rf .git
git init

# Create initial commit
git add -A
git commit -m "Initial Commit"
```

### 3. Installing Dependencies

To download dependencies type in the terminal

```bash
yarn
```

### 4. Starting Development Environment

```bash
# Starts development environment, styleguide and watch processes.
yarn start
```

### 5. Pushing Your Project to GitHub

In order to define your remote address in your local repository type

```bash
git remote add origin git@github.com:atolye15/[your-project-name].git
```

To push your files to your remote repo type

```bash
git push origin --all
```

## Documentation

### 1. Folder Structure

```text
root
├── .cache/               # This is the cache folder for minification and compilation jobs.
├── dev/                  # In development mode files generated by the build process are stored here.
├── dist/                 # In production mode files generated by the build process are stored here.
├── .vscode/              # Visual Studio Code settings are stored here.
├── gulp/                 # All Gulp tasks and related files are located in this folder.
│     ├── assets/         # Static assets used by Gulp tasks are located in this folder.
│     ├── tasks/          # All Gulp tasks are located in this folder.
│     └── utils/          # Utility functions used by Gulp tasks are located in this folder.
├── kss/                  # Settings for KSS package used by Styleguide are located in this folder.
├── src/                  # Files for development are located here. These files are processed by Gulp and /dev and /dist will be created
│     ├── fonts/          # Font files needed for the project should be placed here to be compiled.
│     ├── img/            # Image files needed for the project should be placed here.
│       └── icons/        # SVG files needed for the project should be placed here to be compiled.
│     ├── js/             # Javascript files used in the project should be placed here to be compiled.
│     ├── libs/           # Third-party javascript files used in the project should be placed here and should be added into config.js file under libFiles to be compiled.
│     ├── scss/           # Scss files are located in this folder.
│       ├── abstracts/
│         └── mixins/
│       ├── base/
│         └── utilities/
│       ├── components/
│       ├── objects/
│       └── libs/
│     ├── vendors/        # Third party libraries and plugins should be placed in this folder. These files won't be compiled, only will be moved to /vendors under /dist folder.
├── twig/                 # Twig files are located in this folder.
│   ├── pages/
│   └── partials/
├── .babelrc
├── .browserlistrc
├── .editorconfig
├── .eslintrc.json
├── .gitattributes
├── .gitignore
├── .prettierignore
├── .prettierrc
├── .stylelintignore
├── .stylelintrc
├── .archive.sh
├── CHANGELOG.md
├── config.js
├── gulpfile.babel.js
├── package.json
├── README.md
├── yarn.lock
```

### 2. Commands

You can run commands by typing,

```bash
yarn [command]
```

| Command             | Description                                                                                  |
| :------------------ | ---------------------------------------------------------------------------------------------|
| node_modules-chmod  | node_modules folder 777 permission                                                           |
| start-server        | starts server manually                                                                       |
| lint                | runs lint:js and lint:css commands.                                                          |
| lint:js             | runs eslint for javascript files                                                             |
| lint:css            | runs stylint for scss files                                                                  |
| format              | runs format:js and format:css commands                                                       |
| format:js           | runs prettier for javascript files                                                           |
| format:css          | runs prettier for scss files                                                                 |
| gulp                | runs gulp command                                                                            |
| generate-svg-sprite | runs image:sprite task                                                                       |
| build-styleguide    | builds styleguide                                                                            |
| build               | builds project in development mode                                                           |
| build-prod          | builds project in production mode                                                            |
| deploy              | deploys project                                                                              |
| deploy-prod         | deploys project with production mode                                                         |
| start               | starts project, builds styleguide and runs watch processes                                   |
| start-prod          | starts project in production mode                                                            |
| start-deploy        | starts project in deploy mode                                                                |
| start-deploy-prod   | starts project in both deploy and production mode                                            |
| publish-github      | publishes project on github pages (You need to install gh-pages plugin to use this command)  |

### 3. Example Use Cases

- [Adding icons](docs/Adding-icon.md)
- [Creating a new Javascript file](docs/Adding-javascript-file.md)
- [Adding a new third party library](docs/Adding-third-party-js-files.md)

## License

Web Starter Kit is [MIT licensed.](/LICENSE)
