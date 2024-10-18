FROM node:20

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN npm install

RUN npm install -g nodemon

COPY . .

CMD [ "npm", "run", "dev", "--", "--host" ]