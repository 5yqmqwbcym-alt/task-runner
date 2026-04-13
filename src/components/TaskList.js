import React from 'react';

function TaskList({ tasks, filter, onToggle, onDelete }) {
  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  if (filteredTasks.length === 0) {
    return (
      <p className="text-center text-gray-400 py-10 px-10 text-base m-0">
        No tasks yet. Add one above!
      </p>
    );
  }

  return (
    <div className="mb-5 max-h-96 overflow-y-auto px-10">
      {filteredTasks.map(task => (
        <div 
          key={task.id} 
          className={`flex items-center px-4 py-3.5 border-b border-gray-100 transition-colors hover:bg-gray-50 ${
            task.completed ? 'opacity-60' : ''
          }`}
        >
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
            className="w-5 h-5 mr-4 cursor-pointer accent-primary"
          />
          <span className={`flex-1 text-base text-gray-800 ${
            task.completed ? 'line-through text-gray-400' : ''
          }`}>
            {task.text}
          </span>
          <button 
            onClick={() => onDelete(task.id)}
            className="bg-transparent border-none text-lg cursor-pointer opacity-60 transition-opacity hover:opacity-100"
          >
            🗑️
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
