FROM alpine as BUILD

RUN apk update && \
    apk add nodejs && \
    apk add yarn

RUN mkdir /project
WORKDIR /project
COPY . .
RUN yarn && yarn build
WORKDIR /project/build

FROM nginx as DEPLOY

COPY --from=BUILD /project/build /usr/share/nginx/html
