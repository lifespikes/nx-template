yarn install
yarn api:command generate:open-api-file --path=packages/api-requests/src/open-api/api/open-api.json
yarn workspace @spikey/api-requests orval
yarn api:prisma
nx format:write
