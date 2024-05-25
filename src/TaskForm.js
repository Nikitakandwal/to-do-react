import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Form = styled.form`
  padding: 20px;
  background: #f0f0f0;
  border-radius: 10px;
  margin-top: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Input = styled.input`
  width: calc(100% - 22px);
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Textarea = styled.textarea`
  width: calc(100% - 22px);
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px 15px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

const TaskForm = ({ task, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('pending');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    if (task) {
      setTitle(task.title || '');
      setDescription(task.description || '');
      setStatus(task.status || 'pending');
      setDueDate(task.dueDate || '');
    }
  }, [task]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const taskData = { title, description, status, dueDate };
    if (task.id) {
      await axios.put(`http://localhost:3001/tasks/${task.id}`, taskData);
    } else {
      await axios.post('http://localhost:3001/tasks', taskData);
    }
    onSubmit();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>{task.id ? 'Edit Task' : 'New Task'}</h2>
      <Label>
        Title:
        <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </Label>
      <Label>
        Description:
        <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </Label>
      <Label>
        Status:
        <Select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </Select>
      </Label>
      <Label>
        Due Date:
        <Input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
      </Label>
      <Button type="submit">Save</Button>
    </Form>
  );
};

export default TaskForm;
