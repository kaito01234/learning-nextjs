FROM public.ecr.aws/docker/library/node:20.12.1-slim as builder
WORKDIR /build

COPY package*.json ./
RUN npm ci

COPY . ./
RUN npm run build

FROM public.ecr.aws/docker/library/node:20.12.1-slim
WORKDIR /app

COPY --from=builder /build/next.config.mjs ./
COPY --from=builder /build/public ./public
COPY --from=builder /build/.next/static ./.next/static
COPY --from=builder /build/.next/standalone ./

EXPOSE 3000
CMD [ "node", "server.js" ]
