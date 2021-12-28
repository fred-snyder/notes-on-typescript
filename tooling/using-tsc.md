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
        // "rootDir": "./"
        "rootDir": "./source",
        // "rootDir": "./language/source",

        // "rootDirs": []

        // "outDir": "./"
        "outDir": "./dist"
        // "outDir": "./language/dist",
    },
    // explicitly include and exclude folders
    "include": ["src/**/*"],
    "exclude": ["node_modules"]
}
```
