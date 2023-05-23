#!/bin/bash

if [[ -z "${PASSWORD}" ]]; then
    echo "no password set"
    nohup x11vnc -rfbport ${VNC_SERVER_PORT} -display ${DISPLAY} -loop
else
    mkdir /root/.vnc
    x11vnc -storepasswd ${PASSWORD} /root/.vnc/passwd
    nohup x11vnc -rfbauth /root/.vnc/passwd -rfbport ${VNC_SERVER_PORT} -display ${DISPLAY} -loop
fi