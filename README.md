# Installation Guide:

1. Open terminal with the directory being the folder you want the app in.

2. Clone the repo onto your local machine
```bash
git clone https://github.com/NandTheMan/TravelIn.git
```

3. Change directory to the cloned folder (TravelIn)
```bash
cd ./TravelIn
```

4. Install the needed dependencies (running on root (current dir) will install on all 7 workspaces) 
```bash
pnpm install
```

5. Duplicate the existing .env.example and fill out your credentials for GEMINI_API_KEY and COHERE_API_KEY on 
```bash
TravelIn/apps/api
```

7. Duplicate the existing .env.example and fill out your credentials for DATABASE_URL on 
```bash
TravelIn/apps/api/database/generated/prisma
```

8. Go to `apps/api` directory
```bash
cd ./apps/api
```
and install puppeteer using
```bash
npx puppeteer browsers install chrome
```

9. Go to `apps/api/database` directory
```bash
cd ./database
```
and generate Prisma client (make sure that the API Key is present [7]) using
```bash
pnpm dlx prisma generate
```

10. Go back to root
```bash
cd ..
```
and run the app
```bash
pnpm run dev
```

Note:
1. The command will download a chrome for the puppeteer to run on the local device. If this is on a server environment, set up for the puppeteer may vary.





# shadcn/ui monorepo template

This template is for creating a monorepo with shadcn/ui.

## Usage

```bash
pnpm dlx shadcn@latest init
```

## Adding components

To add components to your app, run the following command at the `package/ui/`:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

This will place the ui components in the `packages/ui/src/components` directory.

## Tailwind

Your `tailwind.config.ts` and `globals.css` are already set up to use the components from the `ui` package.

## Using components

To use the components in your app, import them from the `ui` package.

```tsx
import { Button } from "@workspace/ui/components/button";
```
