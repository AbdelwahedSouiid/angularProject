# Step 1: Build the Angular app
FROM node:latest AS build

WORKDIR /app

# Copy package.json and package-lock.json into the working directory
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration production

# Step 2: Serve with Nginx
FROM nginx:alpine

# Copy the custom Nginx configuration into the container
COPY nginx/default.conf /etc/nginx/conf.d/angular-app.conf

# Copy the Angular build output folder from the "build" stage to Nginx's HTML folder
COPY --from=build /app/dist/angular-project /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
