FROM node:18.15.0-alpine AS base

FROM base AS deps

#dependencies
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

#build
FROM base AS builder

WORKDIR /app

COPY . .

COPY --from=deps /app/node_modules ./node_modules

RUN npm run build

#server
FROM base AS runner

WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=deps /app/package.json ./package.json
COPY --from=deps /app/node_modules ./node_modules

EXPOSE 3000

CMD ["npm", "start"]