# Stage 1: Build dependencies
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source code
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Expose port (same as your backend PORT=5000)
EXPOSE 5000

# Start backend
CMD ["npm", "run", "start"]
