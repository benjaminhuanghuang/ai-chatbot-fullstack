# Engineering setup

## Bun

```sh
curl -fsSL https://bun.sh/install | bash

bun --version
```

Create workspace

```sh
cd my-app

bun init
    - Blank

bun install

mkdir package


Modify package.json
"workspaces": [
    "packages/client",
    "packages/server"
]
```

## Start multi apps using single command

```sh
bun add -d concurrently
```

Modify my-app/index.ts

## Prettier

Add Prettier Extension in VS Code

Create .prettierrc

Format code from command

```sh
cd my-app
bun add -D prettier

bun run format
```

## Husky

```sh
bun add -D husky
bunx husky init

bun add -D lint-staged
```

Modify pre-commit

```sh
bun lint-state
```
