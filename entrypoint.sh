#!/bin/sh

# Check if required environment variables are set
if [ -z "$BASIC_AUTH_USERNAME" ] || [ -z "$BASIC_AUTH_PASSWORD" ]; then
    echo "Error: BASIC_AUTH_USERNAME and BASIC_AUTH_PASSWORD must be set."
    exit 1
fi

# Generate the .htpasswd file dynamically
htpasswd -cbB /etc/nginx/.htpasswd $BASIC_AUTH_USERNAME $BASIC_AUTH_PASSWORD

# Start Nginx
exec nginx -g "daemon off;"
