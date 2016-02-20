[projectUri]: https://github.com/sketch7/ssv-core
[projectGit]: https://github.com/sketch7/ssv-core.git
[changeLog]: ./doc/CHANGELOG.md

[contribWiki]: ./doc/CONTRIBUTION.md
[releaseWorkflowWiki]: ./doc/RELEASE-WORKFLOW.md

[jspm]: http://jspm.io
[typings]: https://github.com/typings/typings

# ssv-core
[![Build status](https://ci.appveyor.com/api/projects/status/2e0an5hvxtfs08mf?svg=true)](https://ci.appveyor.com/project/chiko/ssv-core)
[![Build status](https://ci.appveyor.com/api/projects/status/2e0an5hvxtfs08mf/branch/master?svg=true)](https://ci.appveyor.com/project/chiko/ssv-core/branch/master)
[![bitHound Overall Score](https://www.bithound.io/github/sketch7/ssv-core/badges/score.svg)](https://www.bithound.io/github/sketch7/ssv-core)
[![bitHound Dev Dependencies](https://www.bithound.io/github/sketch7/ssv-core/badges/devDependencies.svg)](https://www.bithound.io/github/sketch7/ssv-core/master/dependencies/npm)

ssv core components, utilities and services

In order to contribute please read the [Contribution guidelines][contribWiki].

**Quick links**

[Change logs][changeLog] | [Project Repository][projectUri] | [Contribution guidelines][contribWiki]

# Installation
Get library via [jspm]
```
jspm install ssv-core=github:sketch7/ssv-core
```
TypeScript Typings via [typings]
```
typings install github:sketch7/ssv-core --ambient --save
```

# Usage
> TODO


# Getting Started


## Setup Machine for Development
Install/setup the following:

- NodeJS v4+
- Visual Studio Code or similar code editor
- TypeScript 1.7+
- SourceTree, SmartGit (or similar)
- Ensure to install **global NPM modules** using the following:


```
npm install -g git gulp tsd karma-cli jspm
```


### Cloning Repo

- Open SourceTree
- Clone project repo from [project git][projectGit]
- Switch to `develop` branch


## Project Setup
The following process need to be executed in order to get started.

```
npm install
```
**NOTE: npm install will automatically install bower as if manually invoking `bower install`** 


## Building the code

```
gulp build
```
In order to view all other tasks invoke `gulp` or check the gulp tasks directly.

## Running the tests

```
gulp test
```


## Development utils

### Trigger gulp watch
Handles compiling of changes.
```
gulp watch
```


### Running Continuous Tests
Spawns test runner and keep watching for changes.
```
gulp tdd
```


## Preparation for Release

```
gulp prepare-release --bump major|minor|patch|prerelease (default: patch)
```
Check out the [release workflow guide][releaseWorkflowWiki] in order to guide you creating a release and distributing it.