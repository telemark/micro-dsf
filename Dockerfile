# Setting the base to nodejs 7.10.0
FROM node:6.14.3-alpine@sha256:ab6b240e933a77232bea533169a0350beabc0cc070e6c51fa4fbdef7dd2e3e0c

# Maintainer
MAINTAINER Jonas Enge

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install --production

# Expose 3000
EXPOSE 3000

# Startup
ENTRYPOINT npm start
