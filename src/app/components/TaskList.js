'use client';

import React, { useState, useEffect } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    async function fetchTasks() {
      const response = await fetch('/api/tasks');
      const fetchedTasks = await response.json();
      setTasks(fetchedTasks);
    }
    fetchTasks();
  }, []);

  const toggleTaskCompletion = async (taskId) => {
    const task = tasks.find(t => t.id === taskId);
    const response = await fetch('/api/tasks', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: taskId, completed: !task.completed }),
    });
    const updatedTask = await response.json();
    setTasks(tasks.map(t => t.id === taskId ? updatedTask : t));
  };

  const groupTasksBySubject = () => {
    return tasks.reduce((acc, task) => {
      if (!acc[task.Materia]) {
        acc[task.Materia] = [];
      }
      acc[task.Materia].push(task);
      return acc;
    }, {});
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
  });

  const groupedTasks = groupTasksBySubject();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Lista de Tareas</h1>
      <div className="mb-4">
        <button 
          onClick={() => setFilter('all')} 
          className={`mr-2 px-4 py-2 rounded ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Todas
        </button>
        <button 
          onClick={() => setFilter('completed')} 
          className={`mr-2 px-4 py-2 rounded ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Completadas
        </button>
        <button 
          onClick={() => setFilter('pending')} 
          className={`px-4 py-2 rounded ${filter === 'pending' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Pendientes
        </button>
      </div>
      {Object.entries(groupedTasks).map(([subject, subjectTasks]) => (
        <div key={subject} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{subject}</h2>
          <ul className="space-y-4">
            {subjectTasks.filter(task => filteredTasks.includes(task)).map(task => (
              <li key={task.id} className="flex items-center space-x-4 bg-white shadow rounded-lg p-4">
                <input
                  type="checkbox"
                  checked={task.completed || false}
                  onChange={() => toggleTaskCompletion(task.id)}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <div className="flex-1">
                  <p className={`font-medium ${task.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                    {task.name}
                  </p>
                  <p className="text-sm text-gray-500">Fecha: {task.Fecha}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TaskList;