# Step 1: Build Angular App
FROM node:latest AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all files and build Angular app
COPY . .
RUN npm run build -- --configuration production

# Step 2: Use Nginx to Serve Angular App
FROM nginx:alpine

# Copy Nginx configuration
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy Angular build output from the previous stage to Nginx html directory
COPY --from=build /app/dist/angular-project /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
