# Stage 1
FROM node:latest as node 

WORKDIR /usr/src/app

COPY package*.json ./

RUN  npm i npm@latest -g

RUN npm install

COPY . .

RUN npm run build

# Stage 2
FROM nginx:latest

COPY --from=node /usr/src/app/dist /usr/share/nginx/html

COPY ./ngnix.conf /etc/nginx/conf.d/default.conf
