# Base image: Node.js
FROM node:latest

# Create app directory inside container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json /app/
RUN npm install

# Copy the rest of the application files
COPY . /app/

# Expose port 4200 (default port for ng serve)
EXPOSE 4200

# Run ng serve and bind to all interfaces to allow external access
CMD ["npm", "run", "start", "--", "--host", "0.0.0.0"]
