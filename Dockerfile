FROM node:16-alpine as build

# Setup project build context
RUN mkdir /project
WORKDIR /project
COPY package.json yarn.lock /project/
RUN yarn install --frozen-lockfile
COPY . /project

# Build project into /project/.next
RUN yarn build

FROM node:16-alpine as DEPLOY

# Setup application deployment context
RUN mkdir /app
WORKDIR /app

COPY --from=BUILD /project/next.config.js /app/next.config.js
COPY --from=BUILD /project/public /app/public
COPY --from=BUILD /project/.next /app/.next
COPY --from=BUILD /project/node_modules /app/node_modules
COPY --from=BUILD /project/package.json /app/package.json

ENV PORT 8080
ENV NEXT_TELEMETRY_DISABLED 1

EXPOSE 8080
ENTRYPOINT ["node_modules/.bin/next", "start"]
