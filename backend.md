# Backend

```sh
cd package/server
bun init
    - Blank

bun add express
bun add -D @types/express @types/node
```

## Validation

```sh
bun add zod
```

## DB

```sh
mysql -u root -p

mysql> quit
```

## Prisma

```sh
bun add -d prisma
bun add @prisma/client

bunx prisma init
```

Install Prisma extension

Add DATABASE_URL TO .env

Add models into prisma/schema.prisma

```sh
bunx prisma migrate dev
    - init
```

## Update DB

```sh
bunx prisma migrate dev
    - refine-schema
```

## Seed

There is the Prisma Schema
Generate a complete SQL script to populate the products and reviews tables in a MySQL database based on the schema above.

## API

```js
const prisma = new PrismaClient();
const productId = Number(req.params.id);

// SELECT * FROM reviews WHERE productId = @productId
prisma.review.findMany({
  where: { productId },
});
```
