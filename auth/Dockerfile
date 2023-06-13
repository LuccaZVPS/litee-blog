FROM node:16

WORKDIR /app

COPY . .

RUN npm install && npx tsc

COPY .env /app/build

WORKDIR /app/build

EXPOSE 3000

CMD ["node","index.js"]