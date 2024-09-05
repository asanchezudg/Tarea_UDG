'use client';

import React, { useState, useEffect } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [selectedMateria, setSelectedMateria] = useState('all');

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

  const groupTasksByDate = () => {
    return tasks.reduce((acc, task) => {
      if (!acc[task.Fecha]) {
        acc[task.Fecha] = [];
      }
      acc[task.Fecha].push(task);
      return acc;
    }, {});
  };

  const filteredTasks = tasks.filter(task => {
    let filterCondition = true;
    if (filter === 'completed') filterCondition = task.completed;
    if (filter === 'pending') filterCondition = !task.completed;
    const materiaCondition = selectedMateria === 'all' || task.Materia === selectedMateria;
    return filterCondition && materiaCondition;
  });

  const groupedTasks = groupTasksByDate();

  const sortedDates = Object.keys(groupedTasks).sort((a, b) => {
    const [monthA, dayA, yearA] = a.split('/');
    const [monthB, dayB, yearB] = b.split('/');
    return new Date(yearA, monthA - 1, dayA) - new Date(yearB, monthB - 1, dayB);
  });

  const formatLongDate = (dateString) => {
    const [month, day, year] = dateString.split('/');
    const date = new Date(year, month - 1, day);
    const dayOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'][date.getDay()];
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    return `${dayOfWeek} ${day} de ${months[date.getMonth()]} de ${year}`;
  };

  const calculateDaysDifference = (taskDate) => {
    const [month, day, year] = taskDate.split('/');
    const taskDateObj = new Date(year, month - 1, day);
    const currentDate = new Date();
    const diffTime = taskDateObj - currentDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getTaskStyle = (task) => {
    if (task.completed) {
      return 'bg-green-200';
    }
    const daysDifference = calculateDaysDifference(task.Fecha);
    if (daysDifference > 0 && daysDifference <= 4) {
      return 'bg-yellow-200';
    } else if (daysDifference === 1) {
      return 'bg-blue-200';
    } else if (daysDifference < 0) {
      return 'bg-red-200';
    }
    return 'bg-white';
  };

  const uniqueMaterias = ['all', ...new Set(tasks.map(task => task.Materia))];

  return (
    <div className="container mx-auto p-4 md:max-w-4xl">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Lista de Tareas</h1>

      {/* Filtros */}
      <div className="mb-4 flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0">
        {/* Filtro por completado */}
        <div className="flex justify-between md:justify-start space-x-2">
          <button 
            onClick={() => setFilter('pending')} 
            className={`px-2 py-1 md:px-4 md:py-2 text-sm md:text-base rounded ${filter === 'pending' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Pendientes
          </button>
          <button 
            onClick={() => setFilter('completed')} 
            className={`px-2 py-1 md:px-4 md:py-2 text-sm md:text-base rounded ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Completadas
          </button>
          <button 
            onClick={() => setFilter('all')} 
            className={`px-2 py-1 md:px-4 md:py-2 text-sm md:text-base rounded ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Todas
          </button>
        </div>

        {/* Filtro por materia */}
        <select 
          value={selectedMateria} 
          onChange={(e) => setSelectedMateria(e.target.value)} 
          className="w-full md:w-500 px-2 py-1 md:px-4 md:py-2 text-sm md:text-base rounded bg-gray-200"
        >
          {uniqueMaterias.map(materia => (
            <option key={materia} value={materia}>
              {materia === 'all' ? 'Todas las Materias' : materia}
            </option>
          ))}
        </select>
      </div>

      {/* Lista de tareas agrupadas por fecha */}
      {sortedDates.map((date) => (
        <div key={date} className="w-full md:w-auto mb-6">
          <h2 className="text-lg md:text-xl font-semibold mb-2">{formatLongDate(date)}</h2>
          <ul className="space-y-2">
            {groupedTasks[date].filter(task => filteredTasks.includes(task)).map(task => (
              <li key={task.id} className={`flex items-start md:items-center space-x-2 md:space-x-4 rounded-lg p-2 md:p-4 ${getTaskStyle(task)} w-full`}>
                <input
                  type="checkbox"
                  checked={task.completed || false}
                  onChange={() => toggleTaskCompletion(task.id)}
                  className="form-checkbox h-4 w-4 md:h-5 md:w-5 text-blue-600 mt-1 md:mt-0 flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className={`text-sm md:text-base font-medium ${task.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                    {task.name}
                  </p>
                  <p className="text-xs md:text-sm text-gray-500">Materia: {task.Materia}</p>
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