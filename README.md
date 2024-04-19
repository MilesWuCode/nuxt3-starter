# Nuxt3 - Starter

## lint

- .editorconfig
- eslint
  - @nuxt/eslint
  ```sh
  npx nuxi module add eslint
  ```
- prettier
  - .prettierignore
  - .prettierrc
  ```sh
  npm i prettier prettier-plugin-tailwindcss
  ```

## typescript

- index.d.ts
  - https://nuxt.com/docs/guide/going-further/runtime-config
  - https://nuxt.com/docs/guide/directory-structure/app-config

## envs

- /envs/\*.env

## ui

- @nuxt/ui

  ```sh
  npm i @nuxt/ui
  ```

## store

- @pinia/nuxt

  ```sh
  npm i pinia @pinia/nuxt
  ```

## docker

- docker/Dockerfile
- build.sh

  ```sh
  # build & run
  sh ./docker/build.sh
  ```

## pm2

- ecosystem.config.json

  ```sh
  pm2 start ecosystem.config.json
  ```

## nuxi

```sh
# add
npx nuxi add layout default
npx nuxi add page index
```

## git

- commitizen

  ```sh
  # install
  npm i commitizen

  # init
  npx commitizen init cz-conventional-changelog

  # run
  npx cz

  # or, package.json add scripts: "commit": "cz"
  npm run commit
  ```

- commitlint

  ```sh
  # install
  npm i @commitlint/cli @commitlint/cz-commitlint @commitlint/config-conventional

  # set path
  npm pkg set config.commitizen.path="@commitlint/cz-commitlint"

  # test
  npm run commit
  ```

- husky

  ```sh
  # install
  npm i husky

  # init
  npx husky init

  # add scripts
  npm pkg set scripts.commitlint="commitlint --edit"

  # set commit-msg
  echo "npm run commitlint \${1}" > .husky/commit-msg

  # remove pre-commit
  rm .husky/pre-commit

  # test
  npm run commit
  ```

## update

```sh
# update nuxt
npx nuxi upgrade

# update package
npm update
npx taze -w

# find outdated
npm outdated

# type check
npx nuxi typecheck
```

## test

- vitest.config.ts

```sh
# install
npm i @nuxt/test-utils vitest @vue/test-utils happy-dom playwright-core

# e2e
npm i playwright

# folder
npx vitest --dir ./components

# coverage
npx vitest --coverage
```

## svg

- @nuxtjs/svg-sprite
  ```sh
  npm i @nuxtjs/svg-sprite
  ```
