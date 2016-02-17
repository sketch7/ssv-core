# Release workflow
In order to release follow the following procedure.

## Machine Setup
In order for this to work first need to setup github through cmd

### Auth to GitHub
Authenticate to github via username/password or SSH.

#### Username/Password Auth
- run `git config --global credential.helper wincred`
 - this will persist the credentials (for windows)
- Trigger push command e.g.

```
git push origin develop
```
 - Auth to github by providing username and password/token


## Gulp commands
These are commands in order to help release easier, however they should be used accordingly depending
on release type e.g. `dev, rc or stable`
### Prepare-Release
Create a new build, test, bump version and generate changelog.
```
gulp prepare-release --bump major|minor|patch|prerelease (default: patch)
```

### Perform-Release
Commit, push and create tag.
```
gulp perform-release
```

## New Stable Release
This process is more for a stable release, however the others are quite similar.
 - GitFlow -> Start new Release
  - Name should be according to the version X.X.X e.g. 1.2.3
 - Run `gulp prepare-release --bump minor` (or other bump options)
 - Gitflow -> Finish Release
 - Checkout `master` branch
 - Run `gulp perform-release`