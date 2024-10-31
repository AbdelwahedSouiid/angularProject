# Use Node.js to build the Angular application
FROM node:latest AS build

WORKDIR /app

# Copy package.json and package-lock.json to install dependencies first
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Build the Angular app for production (uses the defined configuration)
RUN npm run build -- --output-path=./dist

# Use an nginx image to serve static files
FROM nginx:alpine

# Copy the built application from the previous Node stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to allow outside traffic to reach the server
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
