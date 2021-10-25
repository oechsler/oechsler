FROM node:16-alpine as build

# Install dependencies
RUN apk update && \
    apk add yarn

# Setup project build context
RUN mkdir /project
WORKDIR /project
COPY . .
RUN yarn install

# Build project into /project/.output
RUN yarn build

FROM node:16-alpine

RUN mkdir /dist
WORKDIR /dist
COPY --from=BUILD /project/.output /dist

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=8080

ENTRYPOINT [ "node", "/dist/server/index.mjs" ]
