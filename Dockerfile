FROM node:18-alpine
WORKDIR /app
COPY ./build ./build
EXPOSE 3000
CMD ["node", "build"]