FROM node:12.18-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app

ENV PATH /app/node_modules/.bin:$PATH

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
RUN npm install react-scripts@4.0.2 -g --silent
RUN npm i -S serve
COPY . .
EXPOSE 4000
CMD ["npm","start"]