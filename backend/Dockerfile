FROM node:18

# Install build tools for bcrypt
RUN apt-get update && apt-get install -y python3 make g++ && apt-get clean

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]

