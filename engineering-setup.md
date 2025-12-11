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

lint-staged 是一个工具，用来在 Git 暂存区（staged）文件 上运行脚本。

Modify pre-commit

```sh
# 在提交 (git commit) 之前自动运行 ESLint、Prettier、Stylelint 等，只检查本次提交修改的文件，
bunx lint-staged
```

Add .lintstagedrc
