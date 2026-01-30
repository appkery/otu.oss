FROM node:18

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    wget \
    vim \
    nano \
    build-essential \
    python3 \
    python3-pip \
    && rm -rf /var/lib/apt/lists/*

# Install global npm packages that might be needed for development
RUN npm install -g \
    typescript \
    @types/node \
    nodemon \
    ts-node \
    next \
    eslint \
    prettier

# Create ubuntu user
RUN useradd -m -s /bin/bash ubuntu

# Set user and working directory
USER ubuntu
WORKDIR /home/ubuntu

# Set environment variables
ENV NODE_ENV=development
ENV PATH="/home/ubuntu/.local/bin:${PATH}"
