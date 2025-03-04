FROM node:20-alpine
RUN apk add --no-cache git postgresql-client

RUN npm install -g @medusajs/medusa-cli
WORKDIR /app
RUN git clone https://github.com/medusajs/medusa-starter-default.git .
RUN npm install --legacy-peer-deps --include=dev
RUN echo "Fresh build $(date +%s)" > build-timestamp.txt
RUN npm run build
RUN mv .medusa/server/medusa-config.js /app/medusa-config.js  # Move to root
RUN mkdir -p public/admin && mv .medusa/server/public/admin/* public/admin/
EXPOSE 9000
CMD ["sh", "-c", "MEDUSA_ADMIN_WEBSOCKET_URL=ws://localhost:9000/app REDIS_URL=redis://redis:6379 MEDUSA_CONFIG_PATH=/app/.medusa/server/medusa-config.js ./node_modules/.bin/medusa db:migrate && npm run start"]