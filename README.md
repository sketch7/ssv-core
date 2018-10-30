[projectUri]: https://github.com/sketch7/ssv-core
[projectGit]: https://github.com/sketch7/ssv-core.git
[changeLog]: ./CHANGELOG.md
[releaseWorkflowWiki]: ./docs/RELEASE-WORKFLOW.md

[npm]: https://www.npmjs.com

# @ssv/core
[![CircleCI](https://circleci.com/gh/sketch7/ssv-core.svg?style=shield)](https://circleci.com/gh/sketch7/ssv-core)
[![npm version](https://badge.fury.io/js/%40ssv%2Fcore.svg)](https://badge.fury.io/js/%40ssv%2Fcore)

Core utilities, components and services for browser and node.

**Quick links**

[Change logs][changeLog] | [Project Repository][projectUri]

## Installation

Get library via [npm]

```bash
npm install @ssv/core --save
```

## Usage

```ts
import { string } from "@ssv/core";

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


### Project Setup
The following process need to be executed in order to get started.

```bash
npm install
```


### Building the code

```bash
npm run build
```

### Running the tests

```bash
npm test
```

#### Watch
Handles compiling of changes.

```bash
npm start
```


#### Running Continuous Tests
Spawns test runner and keep watching for changes.

```bash
npm run tdd
```


### Preparation for Release

- Update changelogs
- bump version


Check out the [release workflow guide][releaseWorkflowWiki] in order to guide you creating a release and publishing it.