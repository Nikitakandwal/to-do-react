import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskForm from './TaskForm';
import styled from 'styled-components';

const TaskListContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  background: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TaskItem = styled.li`
  list-style: none;
  padding: 15px;
  margin: 10px 0;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  margin-left: 10px;
  padding: 8px 12px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

const AddButton = styled(Button)`
  background: #28a745;

  &:hover {
    background: #218838;
  }
`;

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:3001/tasks');
    setTasks(response.data);
  };

  const handleEdit = (task) => {
    setEditingTask(task);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/tasks/${id}`);
    fetchTasks();
  };

  const handleFormSubmit = () => {
    setEditingTask(null);
    fetchTasks();
  };

  return (
    <TaskListContainer>
      <h1>Task List</h1>
      <AddButton onClick={() => setEditingTask({})}>Add Task</AddButton>
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id}>
            <div>
              <h3>{task.title}</h3>
              <p>Status: {task.status}</p>
              <p>Due Date: {task.dueDate}</p>
            </div>
            <div>
              <Button onClick={() => handleEdit(task)}>Edit</Button>
              <Button onClick={() => handleDelete(task.id)}>Delete</Button>
            </div>
          </TaskItem>
        ))}
      </ul>
      {editingTask && <TaskForm task={editingTask} onSubmit={handleFormSubmit} />}
    </TaskListContainer>
  );
};

export default TaskList;
