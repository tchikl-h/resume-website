FROM node:12-slim

ENV APP_ROOT /src

WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}
RUN npm install
ENV HOST 0.0.0.0
