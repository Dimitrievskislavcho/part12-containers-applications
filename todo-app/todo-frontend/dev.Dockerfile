FROM node:20

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm install @rollup/rollup-linux-x64-gnu

CMD ["npm", "run", "dev", "--", "--host"]