import React from 'react';

function TaskList({ tasks, filter, onToggle, onDelete }) {
  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  if (filteredTasks.length === 0) {
    return <p className="empty-state">No tasks yet. Add one above!</p>;
  }

  return (
    <div className="task-list">
      {filteredTasks.map(task => (
        <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
            className="task-checkbox"
          />
          <span className="task-text">{task.text}</span>
          <button onClick={() => onDelete(task.id)} className="delete-btn">
            🗑️
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
