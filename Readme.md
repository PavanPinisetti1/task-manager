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

     




### API Documentation

# Base URL

       - http://localhost:4000

# Endpoints

  1. Create a Task

      - Method: POST
      - Endpoint: /tasks
      - Request Body:
          - {
              "title": "New Task",
              "description": "This is a new task",
              "status": "TODO",
              "priority": "HIGH",
              "dueDate": "2024-12-30T00:00:00Z"
            }
    - Response:
        Returns the newly created task.

   2. Get All Tasks

        - Method: GET
        - Endpoint: /tasks
        - Query Parameters:
            - status (optional): Filter by status (TODO, IN_PROGRESS, COMPLETED).
            - priority (optional): Filter by priority (LOW, MEDIUM, HIGH).
            - sort (optional): Sort by createdAt or dueDate (ascending/descending).
            - limit (optional): Number of tasks per page.
            - skip (optional): Offset for pagination.
        - Response:
            Returns an array of tasks.
          
    3. Get a Task by ID

        - Method: GET
        - Endpoint: /tasks/:id
        - Response:
            Returns the task object or a 404 error if not found.

    4. Update a Task
    
        - Method: PUT
        - Endpoint: /tasks/:id
        - Request Body:
           - {
                "title": "Updated Task Title",
                "status": "IN_PROGRESS"
             }
        - Response:
            Returns the updated task.


    5. Delete a Task
    
        - Method: DELETE
        - Endpoint: /tasks/:id
        - Response:
            Returns a 204 No Content status if successful.



### Folder Structure

```

```
task-manager-backend/
├── src/
│   ├── models/
│   │   └── Task.js            # Task schema and model
│   ├── routes/
│   │   └── taskRoutes.js      # Task-related API routes
│   ├── middlewares/
│   │   ├── errorMiddleware.js # Centralized error handling
│   │   └── authMiddleware.js  # Optional: Authentication
│   ├── utils/
│   │   └── validation.js      # Validation logic
│   ├── app.js                 # Express app setup
│   └── server.js              # Server entry point
├── .env                       # Environment variables
├── package.json               # Project dependencies
└── README.md                  # Documentation


```

```
  



### Error Handling

    - Uses middleware for centralized error handling.
    - Returns appropriate HTTP status codes (e.g., 400 for validation errors, 404 for not found).









