FROM node:18

WORKDIR /usr/src/app

COPY src ./src
COPY package.json ./
COPY tsconfig.json ./

RUN npm install
RUN npm run build

CMD ["./dist/index.js"]
