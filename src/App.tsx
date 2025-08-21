import { useState } from 'react';
import { Todos } from './components/Todos';
import { type TodoId, type TodoCompleted } from './types';

const mockTodos = [
  {
    id: '1',
    title: 'Ver React Workshop',
    completed: false,
  },
  {
    id: '2',
    title: 'Aprender TypeScript',
    completed: true,
  },
  {
    id: '3',
    title: 'Comprar pan',
    completed: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState(mockTodos);

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id); // Filter always creates a new array even if empty. Includes the values met by the condition, excludes the values not met by the condition.
    setTodos(newTodos);
  };

  const handleCompleted = ({id, completed }: {id: TodoId, completed: TodoCompleted}): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id.id) {
        return {
          ...todo,
          completed: completed.completed,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div className='todoapp'>
      <Todos
        onToggleCompleteTodo={handleCompleted}
        onRemoveTodo={handleRemove}
        todos={todos}
      />
    </div>
  );
};

export default App;
