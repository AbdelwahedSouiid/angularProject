# Stage 1: Build Angular app
# Use the latest Node.js image as the base for the build stage
FROM node:latest AS build

# Create the /app directory if it doesn't exist
RUN mkdir -p /app

# Set the working directory to /app, which is where the build will happen
WORKDIR /app

# Copy the package.json file to the /app directory to install dependencies
# It's important to copy only package.json first to leverage Docker's layer caching for npm install.
COPY package.json /app/

# Install the dependencies specified in package.json
RUN npm install

# Copy the rest of the application files into the /app directory
COPY . /app/

# Build the Angular project using npm, which will generate the production-ready files in /app/dist
RUN npm run build

# Stage 2: Serve the Angular app with NGINX
# Use the latest NGINX image as the base for serving the Angular app
FROM nginx:latest

# Copy the built Angular app from the build stage (located in /app/dist) to NGINX's default html directory
COPY --from=build /app/dist/angular-project /usr/share/nginx/html

# Expose port 80 to allow traffic to the NGINX web server
EXPOSE 80

# Start NGINX in the foreground (this is required to keep the container running)
CMD ["nginx", "-g", "daemon off;"]
