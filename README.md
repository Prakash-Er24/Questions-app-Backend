
# Questions App : Backend

The Backend of questions app, server that handles requests for CRUD operations on a database.
## Features
 - Backend is developed by following MVC (Model View Controller) architecture.
 - Used ExpressJS to handle the incoming requests from client.
 - Mongoose a used as a driver to connect with MongoDB.
 - Authentication is performed
 - Password is encrypted during registeraton using 'bcryptjs' package.
 

## Installation

Clone the repository

```bash
  git clone https://github.com/Prakash-Er24/Questions-app-Backend.git
```
Go to the project directory
```bash
  cd <my-project>
``` 
Install the packages
```bash
  npm install <package-name>
```
Install MongoDB Community Edition and run it by executing
````bash 
  mongod
````
Run the server
```bash
  npm index.js
```
Use nodemon to run the server (Recommended).

## Packages installed 
 - express, mongoose, bcryptjs, jsonwebtoken, cors, validator, dotenv

## Authors

- [@Prakash-Er24](https://github.com/Prakash-Er24)

