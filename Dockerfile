FROM node AS build
ADD package.json /app/
WORKDIR /app
RUN npm install
ADD . /app/
CMD npm run build

FROM nginx
COPY --from=build /app/dist/ /usr/share/nginx/html