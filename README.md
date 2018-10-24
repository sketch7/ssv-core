[projectUri]: https://github.com/sketch7/ssv-core
[projectGit]: https://github.com/sketch7/ssv-core.git
[changeLog]: ./CHANGELOG.md
[releaseWorkflowWiki]: ./docs/RELEASE-WORKFLOW.md

[npm]: https://www.npmjs.com

# ssv-core
[![CircleCI](https://circleci.com/gh/sketch7/ssv-core.svg?style=shield)](https://circleci.com/gh/sketch7/ssv-core)
[![npm version](https://badge.fury.io/js/ssv-core.svg)](https://badge.fury.io/js/ssv-core)

ssv core components, utilities and services

**Quick links**

[Change logs][changeLog] | [Project Repository][projectUri]

## Installation

Get library via [npm]
```bash
npm install @ssv/core --save
```

## Usage

```ts
import { string } from "ssv-core";

let name = string.interpolate("name=:name", { name: "Chiko" });
```


## Getting Started

### Setup Machine for Development
Install/setup the following:

- NodeJS v10+
- Visual Studio Code or similar code editor
- TypeScript 3.1+
- Git + SourceTree, SmartGit or similar (optional)
- Ensure to install **global NPM modules** using the following:


```bash
npm install -g git gulp devtool
```


#### Cloning Repo

- Run `git clone https://github.com/sketch7/ssv-core.git`
- Switch to `develop` branch


### Project Setup
The following process need to be executed in order to get started.

```bash
npm install
```


### Building the code

```
gulp build
// or
npm run build
```
In order to view all other tasks invoke `gulp` or check the gulp tasks directly.

### Running the tests

```
gulp test
// or
npm test
```


### Development utils

#### Trigger gulp watch
Handles compiling of changes.
```
gulp watch
// or
npm start
```


#### Running Continuous Tests
Spawns test runner and keep watching for changes.
```
gulp tdd
// or
npm run tdd
```


### Preparation for Release

```
npm run prepare-release -- --bump major|minor|patch|prerelease (default: patch)
```
Check out the [release workflow guide][releaseWorkflowWiki] in order to guide you creating a release and publishing it.