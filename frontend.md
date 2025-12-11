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
