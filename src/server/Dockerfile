# Create image based on the official Node 6 image from the dockerhub
FROM node:6

# Create a directory where our app will be placed
RUN mkdir -p /dock/server

# Change directory so that our commands run inside this new directory
WORKDIR /dock/server

# Copy dependency definitions
COPY package.json /dock/server

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /dock/server

# Expose the port the app runs in
EXPOSE 4000

# Serve the app
CMD ["npm", "start"]