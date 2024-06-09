import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/tasks');
      setTasks(res.data);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch tasks');
    }
  };

  const addTask = async (e) => {
    e.preventDefault();
    const newTask = { title, description };
    try {
      await axios.post('http://localhost:5000/api/tasks', newTask);
      fetchTasks();
      setTitle('');
      setDescription('');
    } catch (err) {
      console.error(err);
      setError('Failed to add task');
    }
  };

  const updateTask = async (id, completed) => {
    try {
      await axios.put(`http://localhost:5000/api/tasks/${id}`, { completed });
      fetchTasks();
    } catch (err) {
      console.error(err);
      setError('Failed to update task');
    }
  };

  const deleteTask = async (id) => {
    console.log(`Deleting task with ID: ${id}`);
    try {
      const res = await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      if (res.data.message === 'Task removed') {
        fetchTasks();
      } else {
        setError('Failed to delete task');
      }
    } catch (err) {
      console.error(err);
      setError('Failed to delete task');
    }
  };

  // CSS styles
  const styles = `
    .task-container {
      max-width: 600px;
      margin: auto;
      padding: 20px;
      background-color: #f7f7f7;
      border-radius: 8px;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    }

    .task-title {
      text-align: center;
      font-size: 24px;
      margin-bottom: 20px;
    }

    .task-form {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
    }

    .task-input {
      padding: 10px;
      margin-right: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      flex: 1;
    }

    .task-button {
      padding: 10px 20px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .task-button:hover {
      background-color: #0056b3;
    }

    .task-list {
      list-style-type: none;
      padding: 0;
    }

    .task-item {
      padding: 20px;
      margin-bottom: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
      background-color: #fff;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    }

    .task-item h2 {
      margin-top: 0;
      margin-bottom: 10px;
    }

    .task-item p {
      margin: 0;
    }

    .task-item button {
      margin-top: 10px;
      margin-right: 10px;
    }

    .error-message {
      color: red;
      text-align: center;
    }
  `;

  return (
    <div>
      <style>{styles}</style>
      <div className="task-container">
        <h1 className="task-title">Task Manager</h1>
        {error && <p className="error-message">{error}</p>}
        <form className="task-form" onSubmit={addTask}>
          <input
            className="task-input"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            className="task-input"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="task-button" type="submit">Add Task</button>
        </form>
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task._id} className="task-item">
              <h2>{task.title}</h2>
              <p>{task.description}</p>
              <p>{task.completed ? 'Completed' : 'Not Completed'}</p>
              <button className="task-button" onClick={() => updateTask(task._id, !task.completed)}>
                {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
              </button>
              <button className="task-button" onClick={() => deleteTask(task._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
