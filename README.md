# Project Sazón
A suite of products to help you manage your restaurant or hospitality business. Official market name not yet decided.

## Helpful Links
You can find documentation and other helpful information in the following places:
- [Primary Notion Board](https://www.notion.so/Project-Saz-n-1b737a16353f4c90a90d89ac1997591a?pvs=4)
- [Nx Monorepo README](./docs/nx-monorepo.md)
- [NestJS Docs](https://docs.nestjs.com/)
- [Prisma ORM Docs](https://www.prisma.io/docs/)

## Pre-requisites
- Some Unix-based OS or development environment (_MacOS, Linux, WSL2_)
- [NodeJS](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Nx](https://nx.dev/)
- [NestJS](https://nestjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [Yarn](https://yarnpkg.com/)
- [MySQL](https://www.mysql.com/)

Some of the above are dependencies that will install locally in your project, but installing them globally
will help you leverage their CLI tools without having to prefix them with `yarn` or `npm run`.

We also strongly recommend using [WebStorm](https://www.jetbrains.com/webstorm/) as your IDE.

## Getting Started
1. Install all dependencies:
    ```shell
    yarn install
    ```

2. Ensure all your `apps` have a `.env` file in their root directory. You can copy the `.env.example` file and rename it to `.env`:
    ```shell
    cp apps/api/.env.example apps/api/.env
    cp apps/frontend/.env.example apps/frontend/.env
   
    # Expand this as needed for other apps.
   
    # This goes without saying, but make sure you edit the 
    # `.env` files to match your local environment.
    ```

3. Run the API and frontend development servers:
    ```shell
    nx serve frontend
    nx serve api
    ```
   

