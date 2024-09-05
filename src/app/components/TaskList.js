'use client';

import React, { useState, useEffect } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [selectedMateria, setSelectedMateria] = useState('all'); // Estado para la materia seleccionada

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

    // Filtrar también por materia seleccionada
    const materiaCondition = selectedMateria === 'all' || task.Materia === selectedMateria;

    return filterCondition && materiaCondition;
  });

  const groupedTasks = groupTasksByDate();

  // Sort dates (MM/DD/YYYY format)
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

  // Modificación para resaltar las tareas completadas en verde
  const getTaskStyle = (task) => {
    if (task.completed) {
      return 'bg-green-200'; // Si está completada, en verde
    }

    const daysDifference = calculateDaysDifference(task.Fecha);
    if (daysDifference > 0 && daysDifference <= 4) {
      return 'bg-yellow-200'; // Si faltan pocos días
    } else if (daysDifference === 1) {
      return 'bg-blue-200'; // Si es el mismo día
    } else if (daysDifference < 0) {
      return 'bg-red-200'; // Si ya pasó la fecha
    }
    return 'bg-white'; // Default
  };

  // Obtener la lista de materias únicas para el menú desplegable
  const uniqueMaterias = ['all', ...new Set(tasks.map(task => task.Materia))];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Lista de Tareas</h1>

      {/* Filtros */}
      <div className="mb-4 flex space-x-4">
        {/* Filtro por completado */}
        <div>
        <button 
            onClick={() => setFilter('pending')} 
            className={`mr-2 px-4 py-2 rounded ${filter === 'pending' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Pendientes
          </button>
          <button 
            onClick={() => setFilter('completed')} 
            className={`mr-2 px-4 py-2 rounded ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Completadas
          </button>
          <button 
            onClick={() => setFilter('all')} 
            className={`mr-10 px-4 py-2 rounded ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Todas
          </button>
        </div>

        {/* Filtro por materia */}
        <div>
          <select 
            value={selectedMateria} 
            onChange={(e) => setSelectedMateria(e.target.value)} 
            className="px-4 py-2 rounded bg-gray-200"
          >
            {uniqueMaterias.map(materia => (
              <option key={materia} value={materia}>
                {materia === 'all' ? 'Todas las Materias' : materia}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Lista de tareas agrupadas por fecha */}
      {sortedDates.map((date) => (
        <div key={date} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{formatLongDate(date)}</h2>
          <ul className="space-y-4">
            {groupedTasks[date].filter(task => filteredTasks.includes(task)).map(task => (
              <li key={task.id} className={`flex items-center space-x-4 shadow rounded-lg p-4 ${getTaskStyle(task)}`}>
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
                  <p className="text-sm text-gray-500">Materia: {task.Materia}</p>
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
