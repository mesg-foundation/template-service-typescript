FROM node:10.15
WORKDIR /app
COPY ./package* ./
RUN npm install
COPY . .
CMD [ "npm", "start" ]
