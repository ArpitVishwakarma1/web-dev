
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [formData, setFormData] = useState({ title: '', description: '' });

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(API_BASE_URL);
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_BASE_URL, formData);
      fetchTasks();
      setFormData({ title: '', description: '' });
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/${id}`);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Task Manager</h1>
      <form onSubmit={handleSubmit} className="mb-8">
        <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" className="border-gray-400 border-2 rounded-lg p-2 mr-2" />
        <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="border-gray-400 border-2 rounded-lg p-2 mr-2" />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">Add Task</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="mb-2">
            <input type="checkbox" checked={task.completed} onChange={() => console.log('Mark as completed')} className="mr-2" />
            <span className={task.completed ? 'line-through' : ''}>{task.title} - {task.description}</span>
            <button onClick={() => handleDelete(task.id)} className="ml-2 bg-red-500 text-white py-1 px-2 rounded-lg">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
