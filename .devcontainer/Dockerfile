FROM node:23-bookworm-slim

WORKDIR /app

COPY ../* .

RUN npm run setup

EXPOSE 3000
RUN npm run start

CMD ["npm", "run", "start"]