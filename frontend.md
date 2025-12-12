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
bunx --bun shadcn@latest init


bunx --bun shadcn@latest add button

```

## Form

```sh
bun add react-hook-form
```

## Render messages

## Markdown

```sh
bun add react-markdown
```

## Type indicator

```js
<div className="flex self-start gap-1 px-3 py-3 bg-gray-200 rounded-xl items-center">
    <div className="w-2 h-2 bg-gray-800 rounded-full animate-pulse"></div>
    <div className="w-2 h-2 bg-gray-800 rounded-full animate-pulse [animation-delay:0.2s]"></div>
    <div className="w-2 h-2 bg-gray-800 rounded-full animate-pulse [animation-delay:0.4s]"></div>
</div>
```

## Auto scrolling

```js
useEffect(() => {
    if (lastMessageRef.current) {
        lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
}, [messages]);
```

## Copy

Clean the format

```js
onCopy={(e) => {
    const selection = window.getSelection()?.toString().trim();
    if (selection && selection.length > 0) {
        e.stopPropagation();
        e.clipboardData.setData('text/plain', selection);
    }
}}
```
