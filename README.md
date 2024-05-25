# To-Do List Application

A simple and colorful To-Do List application built with React for the frontend and Node.js for the backend. This application allows users to create, read, update, and delete tasks.

## Features

- Add, edit, delete tasks
- View task list with status and due date
- Simple and intuitive user interface

## Screenshots

<!-- Add your screenshots here -->
### Inital page
<img src="https://github.com/Nikitakandwal/to-do-react/assets/98966392/c9e4ddac-1462-407d-b067-8f1f1af5c415" alt="Screenshot 2024-05-25 091252" width="500">

### Add Task
<img src="https://github.com/Nikitakandwal/to-do-react/assets/98966392/164040bb-63ea-4559-aea9-e0c8291fff21" alt="Screenshot 2024-05-25 091309" width="500">

### Save Task
<img src="https://github.com/Nikitakandwal/to-do-react/assets/98966392/6a4f6d7d-72e0-4f34-865e-83f67b1a28f4" alt="Screenshot 2024-05-25 091432" width="500">

### Display of added task
<img src="https://github.com/Nikitakandwal/to-do-react/assets/98966392/d2f3afce-6265-4cc0-a2a0-23f2a176b577" alt="Screenshot 2024-05-25 091443" width="500">

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
cd frontend
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
