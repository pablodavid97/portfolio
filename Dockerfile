# Use an official Node.js runtime as a parent image
FROM node:20 AS build

# Define build-time arguments
ARG IMAGE_URL
ARG BACKEND_URL

# Set environment variables inside the container
ENV VITE_IMAGE_BASE_URL=${IMAGE_URL}
ENV VITE_BACKEND_URL=${BACKEND_URL}

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . . 

# Build the React application using Vite (outputs to dist folder)
RUN npm run build

# Use Nginx to serve the React app
FROM nginx:alpine

# Install Apache2-utils to use the htpasswd tool
RUN apk add --no-cache apache2-utils

# Copy the build output from the previous stage to the Nginx html directory
# Since Vite outputs to the "dist" folder, we copy from /app/dist
COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

# Use a shell script to dynamically generate .htpasswd at runtime
COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

# Expose port 80
EXPOSE 80

# Update CMD to use the script before starting Nginx
CMD ["/usr/local/bin/entrypoint.sh"]