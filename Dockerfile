FROM node:current-alpine as BUILD

# Install dependencies
RUN apk update && \
    apk add yarn

# Setup project build context
RUN mkdir /project
WORKDIR /project
COPY . .
RUN yarn install

# Build project into /project/build
RUN yarn build

FROM caddy/caddy:alpine as DEPLOY

# Add built react app
COPY --from=BUILD /project/build /var/www/html

# Add caddy server config
COPY ./Caddyfile /etc/caddy/Caddyfile
