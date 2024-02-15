
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

function App() {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({ name: '', age: '', email: '' });

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/students`);
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE_URL}/students`, formData);
      fetchStudents();
      setFormData({ name: '', age: '', email: '' });
    } catch (error) {
      console.error('Error creating student:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/students/${id}`);
      fetchStudents();
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Student Registration</h1>
      <form onSubmit={handleSubmit} className="mb-8">
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="border-gray-400 border-2 rounded-lg p-2 mr-2" />
        <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" className="border-gray-400 border-2 rounded-lg p-2 mr-2" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="border-gray-400 border-2 rounded-lg p-2 mr-2" />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">Add Student</button>
      </form>
      <ul>
        {students.map((student) => (
          <li key={student.id} className="mb-2">
            {student.name} - {student.age} years old ({student.email})
            <button onClick={() => handleDelete(student.id)} className="ml-2 bg-red-500 text-white py-1 px-2 rounded-lg">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
