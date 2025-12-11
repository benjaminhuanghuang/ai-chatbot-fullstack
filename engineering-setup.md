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
bun add -D prettier
```

## Husky

```sh

```
