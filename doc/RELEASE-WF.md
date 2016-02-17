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
 

