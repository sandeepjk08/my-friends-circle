# Backend Dockerfile
FROM node:16

WORKDIR /app

# Install dependencies
COPY backend/package.json backend/package-lock.json /app/
RUN npm install

# Copy backend code
COPY backend /app

# Expose port and run the server
EXPOSE 5000
CMD ["node", "server.js"]

