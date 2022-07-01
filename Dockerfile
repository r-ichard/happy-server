FROM node:12-alpine
WORKDIR /usr/src/
COPY . .
CMD ["node", "app.js"]
EXPOSE 8888
