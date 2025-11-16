FROM node:18
WORKDIR /app
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
RUN npm run build
CMD ["npm", "run", "preview", "--", "--port", "3000", "--host"]
