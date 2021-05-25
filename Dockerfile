FROM node:alpine

RUN mkdir /app

WORKDIR /app

COPY . /app

RUN npm install

RUN npm fund

RUN npm audit fix --force

RUN npm start