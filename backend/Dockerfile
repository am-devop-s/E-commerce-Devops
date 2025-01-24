# Step 1: Build the React app with Vite
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) to install dependencies first
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vite app
CMD [ "npm", "run", "dev" ]

# # Step 2: Set up the production environment to serve the built app
# FROM nginx:alpine

# # Copy the build output from the build stage to the nginx directory
# COPY --from=build /app/dist /usr/share/nginx/html

# # Expose port 80 to the outside world
# EXPOSE 80

# # Start nginx to serve the static files
# CMD ["nginx", "-g", "daemon off;"]
