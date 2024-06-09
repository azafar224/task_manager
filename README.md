# Task Manager Web Application

This project is a simple Task Manager web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application allows users to manage a list of tasks with basic CRUD (Create, Read, Update, Delete) operations.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Project Structure](#project-structure)
3. [Backend Setup](#backend-setup)
4. [Frontend Setup](#frontend-setup)
5. [Running the Application](#running-the-application)
7. [Conclusion](#conclusion)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js and npm (https://nodejs.org/)
- MongoDB (https://www.mongodb.com/)

## Project Structure

The project is divided into two main parts: the backend and the frontend.

```
task_manager/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   └── Task.js
│   ├── routes/
│   │   └── tasks.js
│   ├── app.js
│   └── package.json
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Task.js
│   │   │   └── TaskList.js
│   │   ├── App.js
│   │   ├── index.js
│   └── package.json
└── README.md
```

## Backend Setup

1. **Initialize Backend Project**
   - Navigate to your project directory and initialize a new Node.js project:
     ```
     npm init -y
     ```

2. **Install Dependencies**
   - Install the required dependencies for Express, Mongoose, and CORS:
     ```
     npm install express mongoose cors
     ```

3. **Create Project Files**
   - Create necessary files and folders:
     ```
     mkdir config models routes
     touch app.js config/db.js models/Task.js routes/tasks.js
     ```

4. **Add Backend Scripts**
   - Add the following scripts to `package.json`:
     ```
     "scripts": {
       "start": "node app.js",
       "dev": "nodemon app.js"
     }
     ```

## Frontend Setup

1. **Initialize Frontend Project**
   - Create a new React application:
     ```
     npx create-react-app frontend
     cd frontend
     ```

2. **Install Axios**
   - Install Axios for making HTTP requests:
     ```
     npm install axios
     ```

3. **Create Components**
   - Create components inside `src/components/`:
     ```
     mkdir src/components
     touch src/components/Task.js src/components/TaskList.js
     ```

## Running the Application

1. **Run Backend Server**
   - Navigate to the backend directory and start the Express server:
     ```
     npm run dev
     ```

2. **Run Frontend Server**
   - Navigate to the frontend directory and start the React development server:
     ```
     npm start
     ```

## Conclusion

Following this guide, you should have a fully functional Task Manager web application running on your local machine. This project demonstrates the basic usage of the MERN stack for building a simple CRUD application.
