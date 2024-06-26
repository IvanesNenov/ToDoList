FROM node:alpine as builder

USER root

WORKDIR /app
COPY package*.json /app/


RUN npm install

COPY . /app
RUN npm run build


FROM nginx:latest
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]