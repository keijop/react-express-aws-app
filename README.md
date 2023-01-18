# react-express-aws-app
Hello World app to deploy to AWS EC2   
Deployed the application to AWS with following steps:   
- [x] Provision EC2 instance
- [x] Provision Application Load Balancer
- [x] Configure load balancer as reverse-proxy, forward http request to port 80 to port 3000 in ec2/node app
- [x] Install nvm and git on ec2, clone git repository from github
- [x] Save and run the below script on ec2 instance to start the node api

````
#!/bin/bash

# Update
sudo yum update

# Navigate to project
cd react-express-aws-app

# Pull latest version
git pull

# Go to the frontend directory
cd frontend

# Install npm dependencies
npm install

# Build the frontend
npm run build

# Go to the api directory
cd ../api

# Install npm dependencies
npm install

# Start the server
node server.js
```

