#setup lerna

npm i lerna -g

$ lerna init
lerna notice cli v3.22.1
lerna info Creating package.json
lerna info Creating lerna.json
lerna info Creating packages directory
lerna success Initialized Lerna files

# install typescript
npm install -g typescript

# tsconfig.json at root
add content
```
{
  "compilerOptions": {
    "noEmit": true,
    "strict": true,
    "jsx": "react",
    "target": "esnext",
    "module": "esnext",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "rootDir": "./",
    "baseUrl": "./",
    "paths": {
      "*": ["node_modules", "packages"]
    }
  },
  "include": ["packages"],
  "exclude": ["node_modules"]
}
```

#install react, types, styled-components

```
$ npm i -D react @types/react styled-components
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN styled-components@5.2.1 requires a peer of react-dom@>= 16.8.0 but none is installed. You must install peer dependencies yourself.

+ @types/react@17.0.0
+ react@17.0.1
+ styled-components@5.2.1
added 48 packages from 89 contributors and audited 48 packages in 21.169s
```

#add eslint
```
$ npm i -D eslint eslint-config-airbnb eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks

> core-js-pure@3.8.1 postinstall C:\Users\uwaliyul\Documents\github\infinity\node_modules\core-js-pure
> node -e "try{require('./postinstall')}catch(e){}"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!        

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
> https://opencollective.com/core-js 
> https://www.patreon.com/zloirock 

Also, the author of core-js ( https://github.com/zloirock ) 
is looking for a good job -)

npm WARN styled-components@5.2.1 requires a peer of react-dom@>= 16.8.0 but none is installed. You must install peer dependencies yourself.
npm WARN eslint-plugin-prettier@3.3.0 requires a peer of prettier@>=1.13.0 but none is installed. You must install peer 
dependencies yourself.

+ eslint-plugin-jsx-a11y@6.4.1
+ eslint-plugin-react-hooks@4.2.0
+ eslint-plugin-react@7.21.5
+ eslint-plugin-import@2.22.1
+ eslint@7.16.0
+ eslint-config-prettier@7.1.0
+ eslint-config-airbnb-base@14.2.1
+ eslint-plugin-prettier@3.3.0
+ eslint-config-airbnb@18.2.1
added 197 packages from 118 contributors and audited 245 packages in 42.383s
```

#add lint in package.json
```
"lint:ts": "tsc --noEmit && eslint \"packages/**/*.{js,ts,tsx}\" --quiet --fix"
```

#add stylelint
$ npm i -D stylelint stylelint-config-recommended stylelint-config-styled-components stylelint-processor-styled-components
npm WARN eslint-plugin-prettier@3.3.0 requires a peer of prettier@>=1.13.0 but none is installed. You must install peer 
dependencies yourself.
npm WARN styled-components@5.2.1 requires a peer of react-dom@>= 16.8.0 but none is installed. You must install peer dependencies yourself.

+ stylelint-config-recommended@3.0.0
+ stylelint-processor-styled-components@1.10.0
+ stylelint-config-styled-components@0.1.1
+ stylelint@13.8.0
added 189 packages from 170 contributors and audited 436 packages in 62.438s

# add config file
.stylelintrc
```
{
  "processors": ["stylelint-processor-styled-components"],
  "extends": [
    "stylelint-config-recommended",
    "stylelint-config-styled-components"
  ]
}
```
# add task in package.json
```
"lint:css": "stylelint \"./packages/**/*.tsx\"",
```

# add prettier
```
$ npm i -D prettier eslint-config-prettier eslint-plugin-prettier
npm WARN styled-components@5.2.1 requires a peer of react-dom@>= 16.8.0 but none is installed. You must install peer dependencies yourself.

+ eslint-config-prettier@7.1.0
+ eslint-plugin-prettier@3.3.0
+ prettier@2.2.1
added 1 package from 1 contributor, updated 2 packages and audited 437 packages in 6.94s
```

# add config file
.prettierrc.js
```
module.exports = {
    semi: true,
    singleQuote: true,
    printWidth: 120,
    tabWidth: 2
};
```

# add husky and lint staged
```
npm i -D husky lint-staged

> husky@4.3.6 install C:\Users\uwaliyul\Documents\github\infinity\node_modules\husky
> node husky install

husky > Setting up git hooks
husky > Done

> husky@4.3.6 postinstall C:\Users\uwaliyul\Documents\github\infinity\node_modules\husky
> opencollective-postinstall || exit 0

Thank you for using husky!
If you rely on this package, please consider supporting our 
open collective:
> https://opencollective.com/husky/donate

npm WARN styled-components@5.2.1 requires a peer of react-dom@>= 16.8.0 but none is installed. You must install peer dependencies yourself.

+ husky@4.3.6
+ lint-staged@10.5.3
added 76 packages from 31 contributors and audited 513 packages in 25.974s
```

# add command in package.json
```
"husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
"lint-staged": {
    "*.{js,ts,tsx}": [
      "eslint --fix",
      "git add"
    ]
  },
```

# add jest
```
$ npm i -D jest @types/jest jest-styled-components ts-jest
```

# add jest config
```
jest.config.js

module.exports = {
    clearMocks: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'clover'],
    coverageThreshold: {
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80,
      },
    },
    globals: {
      'ts-jest': {
        extends: './babel.config.js',
      },
    },
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    notify: true,
    notifyMode: 'always',
    roots: ['<rootDir>packages'],
    testMatch: ['**/__tests__/*.+(ts|tsx|js)', '**/*.test.+(ts|tsx|js)'],
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    setupFilesAfterEnv: ['<rootDir>jest/setupTests.ts'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
  };
  ```

  # add enzyme
for react 16
```
yarn add -DW enzyme enzyme-adapter-react-16 @types/enzyme @types/enzyme-adapter-react-16
```
for react 17
```
npm i -D enzyme @wojtekmaj/enzyme-adapter-react-17 @types/enzyme
```

Add serializer
npm i -D enzyme-to-json@next

Add folder "jest" with setupTests.ts

Add command test in package.json
"test": "jest"

# add storybook
$ npm i -D storybook @storybook/addon-storysource @storybook/addon-a11y @storybook/addon-actions @storybook/addon-contexts @storybook/addon-knobs @storybook/addon-links @storybook/addon-notes @storybook/addon-viewport @storybook/addons @storybook/preset-create-react-app @storybook/react

# add dom
npm i -D react-dom @types/react-dom

