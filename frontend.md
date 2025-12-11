# Front end

```sh
cd packages/client
bun create vite .
    - React
    - TypeScript

bun install
```

Connect to API using proxy

```json
server: {
    proxy: {
        "/api": "http://localhost:3000",
    },
},
```

## Tailwind

```sh
cd packages/client
bun add tailwindcss @tailwindcss/vite
```

Modify vite.config.ts
Modify index.css
Install Tailwind CSS IntelliSense Extension

## Shadcn

<https://ui.shadcn.com/docs/installation/vite>

```sh
bunx -bun shadcn@latest init


bunx -bun shadcn@latest add button

```

## Form

```sh
bun add react-hook-form
```
