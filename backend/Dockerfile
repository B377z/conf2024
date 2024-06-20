# Use the officaial Node.js 16 as base image

FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the dependencies file to the working directory
COPY package.json .

# Install all dependencies
RUN npm install

# Copy the content of the local src directory to the working directory
COPY . .

# Expose the port the app runs in
EXPOSE 3000

# Serve the app
CMD ["node", "src/index.js"]