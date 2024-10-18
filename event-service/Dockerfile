FROM node:latest

WORKDIR /app

COPY package.json .

RUN npm install -g nodemon

RUN npm install

COPY . .

EXPOSE 4001

CMD ["nodemon", "./src/index.js"]
