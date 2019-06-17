FROM node
ADD package.json /app/
WORKDIR /app
RUN npm install
ADD . /app/
CMD npm start