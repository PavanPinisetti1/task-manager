## Task Manager

This project is a RESTful API for managing tasks, built with Node.js, Express, and MongoDB. It allows users to perform CRUD operations (Create, Read, Update, Delete) on tasks. The backend is designed to follow RESTful principles, with features like filtering, sorting, and pagination.


# Features

  - Create new tasks with fields like title, description, status, priority, and due date.
  - Retrieve all tasks with options for filtering, sorting, and pagination.
  - Update task details, including changing task status.
  - Delete tasks (soft delete functionality optional).
  - Error handling for invalid inputs and API misuse.
  - Scalable, modular codebase.


# Technologies Used

  - Node.js: Server-side runtime environment.
  - Express.js: Web framework for building APIs.
  - MongoDB: NoSQL database for data persistence.
  - Mongoose: ODM for MongoDB for schema definitions and database interaction.
  - dotenv: For managing environment variables.
  - Joi/express-validator: For input validation.


## Installation

# Prerequisites
  Ensure the following are installed on your system:
    
    - Node.js (v14 or higher)
    - MongoDB (local or cloud instance)
    - Postman (optional, for API testing)


# Steps to Run the Backend

  1. Clone the Repository
     
        - git clone https://github.com/your-repo/task-manager-backend.git
        - cd task-manager-backend
    
  2. Install Dependencies

        - npm install
    
  3. Set Up Environment Variables

     Create a .env file in the root directory and configure the following variables:
     
        - PORT=4000
        - MONGO_URI=mongodb://localhost:27017/task-manager //Here use the connection string if the Mongo Atlas is Used.
    
  4. Run MongoDB Server

     If using a local MongoDB instance, start the MongoDB server:

        - mongod

  6. Start the Server

        - npm start / node app.js

  7. Test the API

        - Use Postman, curl, or any API testing tool to test the endpoints.

     













