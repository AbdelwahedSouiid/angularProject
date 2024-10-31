# Use Node.js to build the Angular application
FROM node:latest AS build
# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json into the working directory
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy the entire project into the container
COPY . .

# Inside the Dockerfile, correct the --output-path flag
RUN npm run build -- --configuration production --output-path=./dist


# Step 2: Use an official Nginx image to serve the app
FROM nginx:alpine

# Copy the custom Nginx configuration into the container
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy the Angular build output folder from the "build" stage to Nginx's HTML folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to be accessible externally
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
