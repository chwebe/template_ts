FROM node:23-bookworm-slim

WORKDIR /app

COPY ../* .

RUN npm run setup

EXPOSE 3000

CMD ["npm", "run", "start"]