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
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]