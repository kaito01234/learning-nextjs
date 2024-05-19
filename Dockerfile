FROM node:20-alpine as builder
WORKDIR /build

COPY package*.json ./
RUN npm ci

COPY . ./
RUN npm run build

FROM node:20-alpine
ENV NODE_ENV=production

WORKDIR /app

COPY --from=builder /build/next.config.mjs ./
COPY --from=builder /build/public ./public
COPY --from=builder /build/.next/static ./.next/static
COPY --from=builder /build/.next/standalone ./

EXPOSE 3000
CMD [ "node", "server.js" ]
