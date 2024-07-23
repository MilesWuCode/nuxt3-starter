ARG NODE_VERSION=22

FROM node:${NODE_VERSION}-slim as base

ARG ENV=local.env

WORKDIR /app

# Build
FROM base as build

COPY package.json package-lock.json ./

RUN npm install

COPY . .

COPY ./envs/${ENV} .env

RUN npm run build

# Run
FROM base

COPY --from=build /app/.output /app/.output

EXPOSE 3000

CMD [ "node", ".output/server/index.mjs" ]
