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


# Create new Release

## New RC Release
This process is more for an RC release (pre-release)
 - Run `gulp publish`

## New Stable Release
This process is more for an RC release (pre-release)
 - Run `gulp publish:rel --bump major|minor|patch (default: patch)`


# Gulp Release Commands
These are commands in order to help release easier, however they should be used accordingly depending
on release type e.g. `dev, rc or stable`

### Publish for RC
Quick publish an "RC", this will prepare release and commit.
```
gulp publish
```

### Publish Rel
Quick publish a stable release, this will prepare release and commit.
```
gulp publish:rel --bump major|minor|patch|prerelease (default: patch)
```

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