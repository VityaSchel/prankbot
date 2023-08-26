# syntax=docker/dockerfile:1
FROM node:16.13.0-alpine as install

ARG NPM_TOKEN

WORKDIR /app

COPY .npmrc .npmrc
COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install
RUN rm -r .npmrc

FROM node:16.13.0-alpine as builder

ARG NEXT_PUBLIC_FOOTER
ARG NEXT_PUBLIC_CHECKBOX1
ARG NEXT_PUBLIC_CHECKBOX2

WORKDIR /app

COPY . .

RUN echo NEXT_PUBLIC_FOOTER=$NEXT_PUBLIC_FOOTER >> .env.local && \
    echo NEXT_PUBLIC_CHECKBOX1=$NEXT_PUBLIC_CHECKBOX1 >> .env.local && \
    echo NEXT_PUBLIC_CHECKBOX2=$NEXT_PUBLIC_CHECKBOX2 >> .env.local

RUN npm install && npm run build

CMD ["npm", "run", "start"]