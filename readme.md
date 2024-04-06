Backend
Gameskraft Backend Deployment Guide
This document provides instructions for deploying the backend of the Gameskraft app. The backend is developed using Node.js with Express and MongoDB for data storage.

Prerequisites
Before proceeding with the deployment, ensure you have the following prerequisites installed and configured:

Node.js and npm (Node Package Manager)
MongoDB database instance

Deployment Steps
Follow these steps to deploy the backend of the Gameskraft app:

Clone the Repository:
Clone the backend repository from GitHub to your local machine.

git clone <repository_url>
Install Dependencies:
Navigate to the backend directory and install the required dependencies using npm.


cd backend
npm install

Configuration:
Update the configuration files (config.js, .env) with the necessary environment variables, database connection strings, and API keys.

Database Setup:
Ensure the MongoDB database instance is running and accessible from the deployment environment. Configure the database connection in the configuration files.
*For access to the current database on MongoDb Atlas, IP whitelisting needs to be done.*

For Frontend Deployment
1) Go to android folder 
2) run ./gradlew assembleRelease 
3) Go to android/app/build/outputs/apk/release and copy and  upload app-release.apk
