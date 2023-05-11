# # Dockerfile for agular project using pnpm

# # Stage 1
# FROM node:lts-slim as node

# WORKDIR /app

# COPY package.json ./

# RUN npm install -g pnpm

# RUN pnpm install

# COPY . .

# # RUN pnpm run start
# RUN pnpm run build

# # Stage 2
# FROM nginx:alpine

# COPY --from=node /app/dist/angular-i18n /usr/share/nginx/html

# EXPOSE 80

FROM node:lts-slim

# setup workspace
RUN mkdir -p /home/app
WORKDIR /home/app

# install pnpm and angular cli
RUN npm install -g pnpm @angular/cli

# copy dependency files
COPY package.json /home/app/package.json

# install dependencies
RUN pnpm install

# RUN server
EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0", "--poll=2000", "--port", "4200", "--disable-host-check"]
