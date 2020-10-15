#### Stage 1: Build the react application
FROM node:lts-alpine
# Configure the main working directory inside the docker image. 
# This is the base directory used in any further RUN, COPY, and ENTRYPOINT 
# commands.
WORKDIR /app
# Copy the package.json and install 
# the dependencies. This is a separate step so the dependencies 
# will be cached unless changes to one of those two files 
# are made.
COPY package.json ./
RUN npm install
# Copy the main application
COPY . .
# Expose port 3000 to the Docker host, so we can access it 
# from the outside.
EXPOSE 3000
#CMD npm run start
CMD ["npm", "start"]

# FROM nginx:1.16.0-alpine as prod-stage
# COPY --from=build-step /app/dist/aseme /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
