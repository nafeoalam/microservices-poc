# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Install any needed packages specified in package.json
RUN yarn install

# Make port available to the world outside this container
EXPOSE 3000

# Define environment variable
ENV NAME Value

# Run app when the container launches
CMD ["yarn", "start"]
