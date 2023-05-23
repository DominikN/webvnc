#!/bin/bash

openssl req -x509 -newkey rsa:4096 -keyout /key.pem -out /cert.pem -days 365 -nodes -subj "/C=/ST=/L=/O=/OU=/CN="
websockify --cert=/cert.pem --key=/key.pem ${WEBSOCKIFY_PORT} ${VNC_SERVER_HOST}:${VNC_SERVER_PORT}

# websockify ${WEBSOCKIFY_PORT} ${VNC_SERVER_HOST}:${VNC_SERVER_PORT}