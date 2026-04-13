import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskList from './components/TaskList';
import Hero from './components/Hero';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';

function TaskRunner() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, {
        id: Date.now(),
        text: inputValue,
        completed: false,
        createdAt: new Date().toISOString()
      }]);
      setInputValue('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const clearCompleted = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  const activeCount = tasks.filter(t => !t.completed).length;

  return (
    <div className="w-full max-w-2xl px-5">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        <Hero />
        
        <div className="flex gap-2.5 mb-5 px-10">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
            placeholder="What needs to be done?"
            className="flex-1 px-4 py-3.5 text-base border-2 border-gray-200 rounded-lg outline-none transition-colors focus:border-primary"
          />
          <button 
            onClick={addTask}
            className="px-7 py-3.5 bg-primary text-white border-none rounded-lg text-base font-semibold cursor-pointer transition-colors hover:bg-primary-dark"
          >
            Add Task
          </button>
        </div>

        <div className="flex gap-2.5 mb-5 justify-center px-10">
          <button
            className={`px-5 py-2 border-2 rounded-full cursor-pointer transition-all text-sm font-medium ${
              filter === 'all' 
                ? 'bg-primary text-white border-primary' 
                : 'bg-white border-gray-200 hover:border-primary hover:text-primary'
            }`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={`px-5 py-2 border-2 rounded-full cursor-pointer transition-all text-sm font-medium ${
              filter === 'active' 
                ? 'bg-primary text-white border-primary' 
                : 'bg-white border-gray-200 hover:border-primary hover:text-primary'
            }`}
            onClick={() => setFilter('active')}
          >
            Active
          </button>
          <button
            className={`px-5 py-2 border-2 rounded-full cursor-pointer transition-all text-sm font-medium ${
              filter === 'completed' 
                ? 'bg-primary text-white border-primary' 
                : 'bg-white border-gray-200 hover:border-primary hover:text-primary'
            }`}
            onClick={() => setFilter('completed')}
          >
            Completed
          </button>
        </div>

        <TaskList 
          tasks={tasks}
          filter={filter}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />

        <div className="flex justify-between items-center pt-4 pb-10 px-10 border-t border-gray-100 text-gray-600 text-sm">
          <span>{activeCount} task{activeCount !== 1 ? 's' : ''} left</span>
          {tasks.some(t => t.completed) && (
            <button 
              onClick={clearCompleted}
              className="px-4 py-2 bg-red-500 text-white border-none rounded-md cursor-pointer text-sm transition-colors hover:bg-red-600"
            >
              Clear Completed
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center py-5">
          <Routes>
            <Route path="/" element={<TaskRunner />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfUse />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
