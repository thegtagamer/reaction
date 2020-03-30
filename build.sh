#!/bin/bash
echo "Building rc-api"
docker build -t rc-api2 .
docker-compose up

