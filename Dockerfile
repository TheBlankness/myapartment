FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./build ./build

EXPOSE 3000

CMD ["node", "build"]