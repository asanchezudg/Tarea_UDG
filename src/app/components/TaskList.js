'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [selectedMateria, setSelectedMateria] = useState('all');
  const [editingGrades, setEditingGrades] = useState({});

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

  const updateTaskGrade = async (taskId) => {
    const grade = editingGrades[taskId];
    if (grade === undefined) return;

    const floatGrade = Math.max(0, Math.min(100, parseFloat(grade) || 0));
    const response = await fetch('/api/tasks', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: taskId, calificacion: floatGrade }),
    });
    const updatedTask = await response.json();
    setTasks(tasks.map(t => t.id === taskId ? updatedTask : t));
    setEditingGrades(prev => ({ ...prev, [taskId]: undefined }));
  };

  const groupTasksByMateria = (tasksToGroup) => {
    return tasksToGroup.reduce((acc, task) => {
      if (!acc[task.Materia]) {
        acc[task.Materia] = [];
      }
      acc[task.Materia].push(task);
      return acc;
    }, {});
  };

  const groupTasksByDate = (tasksToGroup) => {
    return tasksToGroup.reduce((acc, task) => {
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

  const completedTasks = filteredTasks.filter(task => task.completed);
  const pendingTasks = filteredTasks.filter(task => !task.completed);

  const groupedCompletedTasks = groupTasksByMateria(completedTasks);
  const groupedPendingTasks = groupTasksByDate(pendingTasks);

  const sortedDates = Object.keys(groupedPendingTasks).sort((a, b) => {
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
    const [taskMonth, taskDay, taskYear] = task.Fecha.split('/');
    const taskDate = new Date(taskYear, taskMonth - 1, taskDay);
    const currentDate = new Date();
    
    if (
      taskDate.getFullYear() === currentDate.getFullYear() &&
      taskDate.getMonth() === currentDate.getMonth() &&
      taskDate.getDate() === currentDate.getDate()
    ) {
      return 'bg-blue-200';
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
    <div className="min-h-screen w-full flex flex-col items-center justify-start p-4 md:max-w-6xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Lista de Tareas</h1>
  
      {/* Filtro por materia */}
      <select 
        value={selectedMateria} 
        onChange={(e) => setSelectedMateria(e.target.value)} 
        className="w-full max-w-full px-2 py-1 md:px-4 md:py-2 text-sm md:text-base rounded bg-gray-200 mb-4"
      >
        {uniqueMaterias.map(materia => (
          <option key={materia} value={materia}>
            {materia === 'all' ? 'Todas las Materias' : materia}
          </option>
        ))}
      </select>
  
      {/* Filtros */}
      <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-center md:space-x-4 space-y-2 md:space-y-0 w-full max-w-full">
        <div className="flex justify-center space-x-2">
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
          <Link href="/calificaciones-resumen" className="bg-green-500 text-white px-4 py-2 rounded">
            Ver Resumen
          </Link>
        </div>
      </div>
  
      {/* Lista de tareas completadas agrupadas por materia */}
      {(filter === 'completed' || filter === 'all') && (
        <div className="w-full mb-6">
          <h2 className="text-lg md:text-xl font-semibold mb-2">Tareas Completadas</h2>
          {Object.entries(groupedCompletedTasks).map(([materia, tasks]) => (
            <div key={materia} className="mb-4">
              <h3 className="text-md font-semibold mb-2">{materia}</h3>
              <ul className="space-y-2">
                {tasks.map(task => (
                  <li 
                    key={task.id} 
                    className={`flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4 rounded-lg p-2 md:p-4 ${getTaskStyle(task)} w-full`}
                  >
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleTaskCompletion(task.id)}
                        className="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <div>
                        <span className="font-semibold">{task.name}</span> - <span className="text-gray-600">{task.Fecha}</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">{task.Tarea}</div>
                    <div className="flex items-center space-x-2">
                      <label className="text-xs md:text-sm text-gray-500 flex items-center">
                        Calificación:
                        <input
                          type="number"
                          step="0.01"
                          min="0"
                          max="100"
                          value={editingGrades[task.id] !== undefined ? editingGrades[task.id] : (task.calificacion || '')}
                          onChange={(e) => {
                            const value = e.target.value;
                            if (value === '' || (parseFloat(value) >= 0 && parseFloat(value) <= 100)) {
                              setEditingGrades(prev => ({ ...prev, [task.id]: value }));
                            }
                          }}
                          className="ml-2 w-20 px-1 py-0.5 border rounded text-center"
                        />
                      </label>
                      <button
                        onClick={() => updateTaskGrade(task.id)}
                        className="px-2 py-1 bg-blue-500 text-white rounded text-xs md:text-sm"
                      >
                        Enviar
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
  
      {/* Lista de tareas pendientes agrupadas por fecha */}
      {(filter === 'pending' || filter === 'all') && (
        <div className="w-full mb-6">
          <h2 className="text-lg md:text-xl font-semibold mb-2">Tareas Pendientes</h2>
          {sortedDates.map((date) => (
            <div key={date} className="mb-4">
              <h3 className="text-md font-semibold mb-2">{formatLongDate(date)}</h3>
              <ul className="space-y-2">
                {groupedPendingTasks[date].map(task => (
                  <li 
                    key={task.id} 
                    className={`flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4 rounded-lg p-2 md:p-4 ${getTaskStyle(task)} w-full`}
                  >
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleTaskCompletion(task.id)}
                        className="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <div>
                        <span className="font-semibold">{task.name}</span> - <span className="text-gray-600">{task.Materia}</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">{task.Tarea}</div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;