yarn install
yarn api:command generate:open-api-file --path=packages/api-requests/src/open-api/api/open-api.json
cd packages/api-requests && yarn orval
yarn api:prisma
nx format:write
