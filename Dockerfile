# Website (Next.js) — dev container for `docker compose`.
FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

# Bind to 0.0.0.0 so the published port is reachable from the host.
CMD ["npx", "next", "dev", "-H", "0.0.0.0"]
