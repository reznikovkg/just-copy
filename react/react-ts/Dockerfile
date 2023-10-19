FROM node:17-alpine as build

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

FROM nginx

COPY --from=build /app/dist /var/www

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]