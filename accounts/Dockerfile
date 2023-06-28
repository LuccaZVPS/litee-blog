FROM node:16

WORKDIR /app

COPY . .

RUN npm install && npx tsc

EXPOSE 3000

CMD ["node","build/index.js"]