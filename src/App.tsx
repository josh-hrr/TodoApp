import { useState } from 'react';
import { Todos } from './components/Todos';
import { type TodoId, type TodoCompleted, type FilterValue } from './types';
import { Footer } from './components/Footer';
import { TODO_FILTERS } from './types/consts';

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
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

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

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter);
  }

  const activeCount = todos.filter(todo => !todo.completed).length;
  const completedCount = todos.length - activeCount;

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ALL) return todo
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed 
  })

  return (
    <div className='todoapp'>
      <Todos
        onToggleCompleteTodo={handleCompleted}
        onRemoveTodo={handleRemove}
        todos={filteredTodos}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        onClearCompleted={ () => {} }
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
      />
    </div>
  );
};

export default App;
