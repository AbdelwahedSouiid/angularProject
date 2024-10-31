# Use Node.js to build the Angular application
FROM node:latest AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build -- --output-path=./dist

# Step 2: Use an Nginx container to serve the Angular app
FROM nginx:alpine

# Copy your custom nginx config
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
