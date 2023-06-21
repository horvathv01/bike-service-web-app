FROM node:alpine

LABEL authors="Tomi, Vili, Krisztián"

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
