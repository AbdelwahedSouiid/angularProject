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

# Copy your custom nginx config
COPY nginx/default.conf /etc/nginx/conf.d/default.conf  # This step ensures Nginx uses the right config

# Copy the Angular built project files
COPY --from=build /app/dist /usr/share/nginx/html  # This places the Angular build into Nginxs default directory

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
