# syntax = docker/dockerfile:1

ARG NODE_VERSION=20.17.0

FROM node:${NODE_VERSION}-slim as base

ARG PORT=3000

ENV NODE_ENV=production

WORKDIR /src

# Установка pnpm
RUN npm install -g pnpm
# Build
FROM base as build

COPY --link package.json pnpm-lock.yaml .
RUN pnpm install --production=false

COPY --link . .


# Генерация Prisma
RUN pnpm prisma generate


RUN pnpm run build
RUN pnpm prune

# Run
FROM base

ENV PORT=$PORT

COPY --from=build /src/.output /src/.output
# Optional, only needed if you rely on unbundled dependencies
# COPY --from=build /src/node_modules /src/node_modules

CMD [ "node", ".output/server/index.mjs" ]