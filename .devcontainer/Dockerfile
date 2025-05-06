FROM node:23-bookworm-slim
RUN apt-get update && apt-get install -y bash
WORKDIR /app

COPY package.json .
RUN npm run setup && mkdir -p dist
EXPOSE 3000
CMD ["npm", "start"]
