# -------- Angular Build --------
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration production

# -------- NGINX --------
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/shree-hans-fabrication-ui /usr/share/nginx/html
EXPOSE 80
