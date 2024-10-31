# Step 1: Use Node.js to build the Angular app
FROM node:latest AS build

WORKDIR /app

# Copy package.json and package-lock.json into the working directory
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy the entire project into the container
COPY . .

# Build the Angular project using the configuration set in angular.json
RUN npm run build -- --configuration production

# Step 2: Use an official Nginx image to serve the app
FROM nginx:alpine

# Copy the custom Nginx configuration into the container
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy the Angular build output folder (be sure to match `angular.json`) from the "build" stage to Nginx's HTML folder
COPY --from=build /app/dist/angular-project /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
