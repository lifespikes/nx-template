yarn install
node spikey generate:open-api-file api --path=packages/api-requests/src/open-api/api/open-api.json
nx run api-requests:orval
npx prisma generate
nx format:write
