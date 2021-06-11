FROM node:14.17 as base

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 4200

FROM base as production

RUN npm build


