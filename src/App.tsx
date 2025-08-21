import { useState } from 'react';
import { Todos } from './components/Todos';

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
  const [todos] = useState(mockTodos);

  return (
    <div className='todoapp'>
      <Todos todos={todos} />
    </div>
  );
};

export default App;
