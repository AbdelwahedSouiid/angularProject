# Use Node.js to build the Angular application
FROM node:latest AS build
# Set the working directory inside the container
WORKDIR /app

# Copy over package.json and package-lock.json to install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your Angular application
COPY . .

# Build Angular app with production configuration
RUN npm run build -- --output-path=./dist

# Stage 2: Use Nginx to serve the Angular app
FROM nginx:alpine

# Ensure you've created default.conf with proper Angular routing (../nginx/default.conf)
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy the Angular build generated from the "build" stage to Nginx's HTML folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
