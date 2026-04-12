import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// Mock localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
    removeItem: (key) => {
      delete store[key];
    }
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

describe('App Component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('renders Task Keeper heading', () => {
    render(<App />);
    const headingElement = screen.getByText(/Task Keeper/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders empty state message when no tasks', () => {
    render(<App />);
    const emptyMessage = screen.getByText(/No tasks yet. Add one above!/i);
    expect(emptyMessage).toBeInTheDocument();
  });

  test('allows user to add a new task', async () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/What needs to be done?/i);
    const addButton = screen.getByText(/Add Task/i);

    await userEvent.type(input, 'Buy groceries');
    fireEvent.click(addButton);

    const taskText = screen.getByText('Buy groceries');
    expect(taskText).toBeInTheDocument();
  });

  test('clears input field after adding task', async () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/What needs to be done?/i);
    const addButton = screen.getByText(/Add Task/i);

    await userEvent.type(input, 'Test task');
    fireEvent.click(addButton);

    expect(input.value).toBe('');
  });

  test('does not add empty task', async () => {
    render(<App />);
    const addButton = screen.getByText(/Add Task/i);

    fireEvent.click(addButton);

    const emptyMessage = screen.getByText(/No tasks yet. Add one above!/i);
    expect(emptyMessage).toBeInTheDocument();
  });

  test('does not add task with only whitespace', async () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/What needs to be done?/i);
    const addButton = screen.getByText(/Add Task/i);

    await userEvent.type(input, '   ');
    fireEvent.click(addButton);

    const emptyMessage = screen.getByText(/No tasks yet. Add one above!/i);
    expect(emptyMessage).toBeInTheDocument();
  });

  test('allows adding task by pressing Enter', async () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/What needs to be done?/i);

    await userEvent.type(input, 'Task via Enter{enter}');

    const taskText = screen.getByText('Task via Enter');
    expect(taskText).toBeInTheDocument();
  });

  test('can toggle task completion', async () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/What needs to be done?/i);
    const addButton = screen.getByText(/Add Task/i);

    await userEvent.type(input, 'Complete this task');
    fireEvent.click(addButton);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  test('can delete a task', async () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/What needs to be done?/i);
    const addButton = screen.getByText(/Add Task/i);

    await userEvent.type(input, 'Task to delete');
    fireEvent.click(addButton);

    const deleteButton = screen.getByText('🗑️');
    fireEvent.click(deleteButton);

    const deletedTask = screen.queryByText('Task to delete');
    expect(deletedTask).not.toBeInTheDocument();
  });

  test('displays correct active task count', async () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/What needs to be done?/i);
    const addButton = screen.getByText(/Add Task/i);

    // Add two tasks
    await userEvent.type(input, 'Task 1');
    fireEvent.click(addButton);
    await userEvent.type(input, 'Task 2');
    fireEvent.click(addButton);

    expect(screen.getByText('2 tasks left')).toBeInTheDocument();

    // Complete one task
    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[0]);

    expect(screen.getByText('1 task left')).toBeInTheDocument();
  });

  test('filters tasks correctly - All filter', async () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/What needs to be done?/i);
    const addButton = screen.getByText(/Add Task/i);

    await userEvent.type(input, 'Active task');
    fireEvent.click(addButton);
    await userEvent.type(input, 'Completed task');
    fireEvent.click(addButton);

    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[1]);

    const allButton = screen.getByText('All');
    fireEvent.click(allButton);

    expect(screen.getByText('Active task')).toBeInTheDocument();
    expect(screen.getByText('Completed task')).toBeInTheDocument();
  });

  test('filters tasks correctly - Active filter', async () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/What needs to be done?/i);
    const addButton = screen.getByText(/Add Task/i);

    await userEvent.type(input, 'Active task');
    fireEvent.click(addButton);
    await userEvent.type(input, 'Completed task');
    fireEvent.click(addButton);

    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[1]);

    const activeButton = screen.getByText('Active');
    fireEvent.click(activeButton);

    expect(screen.getByText('Active task')).toBeInTheDocument();
    expect(screen.queryByText('Completed task')).not.toBeInTheDocument();
  });

  test('filters tasks correctly - Completed filter', async () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/What needs to be done?/i);
    const addButton = screen.getByText(/Add Task/i);

    await userEvent.type(input, 'Active task');
    fireEvent.click(addButton);
    await userEvent.type(input, 'Completed task');
    fireEvent.click(addButton);

    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[1]);

    const completedButton = screen.getByText('Completed');
    fireEvent.click(completedButton);

    expect(screen.queryByText('Active task')).not.toBeInTheDocument();
    expect(screen.getByText('Completed task')).toBeInTheDocument();
  });

  test('clear completed button appears when tasks are completed', async () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/What needs to be done?/i);
    const addButton = screen.getByText(/Add Task/i);

    await userEvent.type(input, 'Task to complete');
    fireEvent.click(addButton);

    expect(screen.queryByText('Clear Completed')).not.toBeInTheDocument();

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(screen.getByText('Clear Completed')).toBeInTheDocument();
  });

  test('clear completed removes all completed tasks', async () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/What needs to be done?/i);
    const addButton = screen.getByText(/Add Task/i);

    await userEvent.type(input, 'Task 1');
    fireEvent.click(addButton);
    await userEvent.type(input, 'Task 2');
    fireEvent.click(addButton);
    await userEvent.type(input, 'Task 3');
    fireEvent.click(addButton);

    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[0]);
    fireEvent.click(checkboxes[1]);

    const clearButton = screen.getByText('Clear Completed');
    fireEvent.click(clearButton);

    expect(screen.queryByText('Task 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Task 2')).not.toBeInTheDocument();
    expect(screen.getByText('Task 3')).toBeInTheDocument();
  });

  test('persists tasks to localStorage', async () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/What needs to be done?/i);
    const addButton = screen.getByText(/Add Task/i);

    await userEvent.type(input, 'Persistent task');
    fireEvent.click(addButton);

    await waitFor(() => {
      const savedTasks = JSON.parse(localStorage.getItem('tasks'));
      expect(savedTasks).toHaveLength(1);
      expect(savedTasks[0].text).toBe('Persistent task');
    });
  });

  test('loads tasks from localStorage on mount', () => {
    const existingTasks = [
      { id: 1, text: 'Existing task', completed: false, createdAt: new Date().toISOString() }
    ];
    localStorage.setItem('tasks', JSON.stringify(existingTasks));

    render(<App />);

    expect(screen.getByText('Existing task')).toBeInTheDocument();
  });

  test('applies correct CSS class to completed tasks', async () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/What needs to be done?/i);
    const addButton = screen.getByText(/Add Task/i);

    await userEvent.type(input, 'Task to check class');
    fireEvent.click(addButton);

    const taskItem = screen.getByText('Task to check class').closest('.task-item');
    expect(taskItem).not.toHaveClass('completed');

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(taskItem).toHaveClass('completed');
  });

  test('active filter button has active class when selected', () => {
    render(<App />);
    const activeButton = screen.getByText('Active');

    fireEvent.click(activeButton);

    expect(activeButton).toHaveClass('active');
  });

  test('displays singular "task" for count of 1', async () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/What needs to be done?/i);
    const addButton = screen.getByText(/Add Task/i);

    await userEvent.type(input, 'Single task');
    fireEvent.click(addButton);

    expect(screen.getByText('1 task left')).toBeInTheDocument();
  });
});
