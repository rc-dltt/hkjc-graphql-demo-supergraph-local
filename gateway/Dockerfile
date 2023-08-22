FROM node:18

WORKDIR /usr/src/app

COPY src ./src
COPY package.json ./
COPY supergraph.yaml ./

RUN npm install
RUN npm run build

CMD ["./src/index.js"]
