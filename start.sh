#!/bin/sh
NGINX_DIR=/nix/store/nf658qiqq1scl6g799lmzn22s3igyhv2-nginx-1.24.0
cp $NGINX_DIR/conf/nginx.conf /tmp/nginx.conf
cp $NGINX_DIR/conf/mime.types /tmp/mime.types
sed -i 's|root   html;|root   /app;|g' /tmp/nginx.conf
sed -i 's|include       mime.types;|include       /tmp/mime.types;|g' /tmp/nginx.conf
nginx -c /tmp/nginx.conf -g 'daemon off;'
