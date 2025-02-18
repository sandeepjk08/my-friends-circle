# Frontend Dockerfile
FROM node:16

WORKDIR /app

# Install dependencies
COPY frontend/package.json frontend/package-lock.json /app/
RUN npm install

# Copy frontend code
COPY frontend /app

# Build the React app
RUN npm run build

# Expose port for frontend
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]

