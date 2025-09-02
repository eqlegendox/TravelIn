Installation:
1. open terminal with the directory being the folder you want the app in.
2. git clone https://github.com/NandTheMan/TravelIn.git
3. change directory to the cloned folder (TravelIn)
4. pnpm install
5. create .env for GEMINI_API_KEY and COHERE_API_KEY on apps/api
7. create .env for DATABASE_URL on apps/api/database/generated/prisma
8. run 'npx puppeteer browers install chrome' on terminal with apps/api as directory[1]
9. pnpm run dev

Note:
1. The command will download a chrome for the puppeteer to run on the local device. If this is on a server environment, set up for the puppeteer may vary.

# shadcn/ui monorepo template

This template is for creating a monorepo with shadcn/ui.

## Usage

```bash
pnpm dlx shadcn@latest init
```

## Adding components

To add components to your app, run the following command at the root of your `web` app:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

This will place the ui components in the `packages/ui/src/components` directory.

## Tailwind

Your `tailwind.config.ts` and `globals.css` are already set up to use the components from the `ui` package.

## Using components

To use the components in your app, import them from the `ui` package.

```tsx
import { Button } from "@workspace/ui/components/button"
```
