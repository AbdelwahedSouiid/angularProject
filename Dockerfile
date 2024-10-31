# Use Node.js to build the Angular application
FROM node:latest AS build
# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the Angular application files
COPY . .

# Build the Angular project in production mode
RUN npm run build -- --output-path=./dist

# Step 2: Serve the Angular app with Nginx
FROM nginx:alpine

# Copy the Angular build output from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 (Nginx default) to the host system
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
