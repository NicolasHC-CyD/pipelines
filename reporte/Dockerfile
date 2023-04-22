FROM node:alpine3.16
WORKDIR /express
COPY package.json ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]