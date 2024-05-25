# To-Do List Application

A simple and colorful To-Do List application built with React for the frontend and Node.js for the backend. This application allows users to create, read, update, and delete tasks.

## Features

- Add, edit, delete tasks
- View task list with status and due date
- Simple and intuitive user interface

## Screenshots

<!-- Add your screenshots here -->
<!-- ![Screenshot 1](path/to/screenshot1.png) -->
<!-- ![Screenshot 2](path/to/screenshot2.png) -->

## Installation

### Clone the Repository

```sh
git clone https://github.com/your-username/todo-list.git
cd todo-list
```
## Backend Setup
Navigate to the backend directory and install dependencies:

```sh 
cd backend
npm install
```
Start the backend server:

```sh 
node server.js
```
The backend server should now be running on http://localhost:3001.

## Frontend Setup
Open a new terminal window/tab.

Navigate to the frontend directory:

```sh 
cd ../todo-list
```
Install dependencies:

```sh  
npm install
```
Start the frontend server:
```sh
npm start
```
## Using the Application
Open your web browser and go to http://localhost:3000 to access the To-Do List application.
You can add, edit, and delete tasks using the provided interface.
Tasks are color-coded based on their status: pending tasks are displayed in yellow, in-progress tasks in blue, and completed tasks in green.
### Backend API Endpoints
The backend provides the following RESTful API endpoints for managing tasks:

- `GET /tasks`: Retrieve all tasks.
- `GET /tasks/:id`: Retrieve a single task by ID.
- `POST /tasks`: Create a new task.
- `PUT /tasks/:id`: Update an existing task by ID.
- `DELETE`: Delete a task by ID.
