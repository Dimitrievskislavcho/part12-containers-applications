FROM node:20 AS test-stage 

WORKDIR /usr/src/app

COPY . .

RUN npm run test

FROM node:20 AS build-stage

COPY --from=test-stage /usr/src/app /usr/src/app

WORKDIR /usr/src/app

RUN npm ci

RUN npm run build

FROM nginx:1.25-alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html