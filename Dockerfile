FROM node:16-alpine3.16

RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/* && apk add bash curl && apk add --no-cache tzdata postgresql-client ffmpeg
WORKDIR /app

ENV NODE_ENV=development
ENV TZ=Asia/Tokyo

COPY package.json .
COPY package-lock.json .
RUN npm install -g @nestjs/cli
RUN npm install
COPY . .

CMD ["npm", "run", "start:dev"]
