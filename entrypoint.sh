#!/bin/sh

# Check if node_modules directory exists
if [ ! -d "node_modules" ]; then
  # Install the necessary dependencies if node_modules is missing
  npm init -y
  npm install lz-string
fi

# Execute the provided command
exec "$@"

