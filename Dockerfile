# Step 1: Build the Angular app
FROM node:latest AS build

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration production

# Step 2: Serve with Nginx
FROM nginx:alpine

COPY nginx/default.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/angular-project /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
