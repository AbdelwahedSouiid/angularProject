# Step 1: Use Node.js to build the Angular app
FROM node:latest AS build

WORKDIR /app

# Copy package.json and package-lock.json into the working directory
COPY package*.json ./
RUN npm cache clean --force
RUN npm install
COPY . .

RUN npm run build -- --configuration production
#Stage 2

FROM nginx:alpine

#caching files
VOLUME /var/cache/nginx 

RUN rm -r /usr/share/nginx/html/*

# Copy the Angular build output folder (be sure to match `angular.json`) from the "build" stage to Nginx's HTML folder
COPY --from=node /app/dist/angular-project /usr/share/nginx/html/

RUN rm /usr/share/nginx/html/assets/environments/runtime-environment.json*


# Copy the custom Nginx configuration into the container
COPY nginx/default.conf /etc/nginx/conf.d/default.conf



# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
