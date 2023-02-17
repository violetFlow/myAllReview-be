# Specify the Node.js version to use as the base image
FROM node:14-alpine

# Set the working directory for the app
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the app's dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port on which the app will run
EXPOSE 3000

# Start the application
CMD [ "npm", "start" ]
