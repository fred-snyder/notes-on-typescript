# TSC

```bash
# compile app.ts to app.js
tsc app

# watch folder for changes
tsc --watch

# initialize a new Typescript project
tsc --init
```

## tsconfig.json

These config values are probably settings you'd want to update according to your needs.

https://www.typescriptlang.org/tsconfig

```json
{
    "compilerOptions": {
        // specify the version of the compiled JS
        "target": "es5",

        // generate sourcemaps for debugging in developer tools
        "sourcemap": true,

        // set the location of the .ts source files
        "rootDir": "./",
        "rootDir": "./source",
        "rootDir": "./language/source",

        // you can specify multiple root dirs
        "rootDirs": [],

        // set where TSC outputs the compiled files
        // note: the folder structure inside the rootDir is also included
        "outDir": "./",
        "outDir": "./dist",
        "outDir": "./language/dist",
    },
    // explicitly include and exclude folders
    "include": ["src/**/*"],
    "exclude": ["node_modules"],
    // node_modules is excluded by default
    // but if you set the exclude property
    // you have to exclude node_modules
}
```
