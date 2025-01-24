# # Stage-1 & specify a name 'builder'
# FROM  node:20 AS builder

# # Create a directory  and go to the directory 
# WORKDIR /app

# # Copy the package.json file to my current directory to install the necessary dependence  
# COPY package.json .

# # Install the dependence
# RUN npm install

# # Copy other files to my current directory
# COPY . .

# # Build and optimize static file
# RUN npm run build

# # Stage-2
# FROM nginx:1.25.2-alpine-slim

# # Copy the static file to my Nginx folder to serve static contain
# COPY --from=builder /app/dist /usr/share/nginx/html

# # Open the port to react
# EXPOSE 80

# # Run nginx in the foreground
# CMD ["nginx", "-g", "daemon off;"]


# # Step 1: Build the React app with Vite
# FROM node:20

# # Set the working directory inside the container
# WORKDIR /app

# # Copy the package.json and package-lock.json (or yarn.lock) to install dependencies first
# COPY package*.json ./

# # Install the project dependencies
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# EXPOSE 3000

# # Build the Vite app
# CMD [ "npm", "run", "dev" ]


# Use the official Nginx image to serve the built frontend
FROM nginx:alpine

# Copy the Nginx config file
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the build folder into the container's Nginx HTML folder
COPY ./dist /usr/share/nginx/html

# Expose port 80 (default for Nginx)
EXPOSE 80

