import type { TodoTitle } from "../types";
import { CreateTodo } from "./CreateTodo";

interface Props {
  saveTodo: ({ title }: TodoTitle) => void;
}

export const Header: React.FC<Props> = ({ saveTodo }) => {
  return (
    <header className='header'>
      <h1>
        orita
    <span style={{ color: '#208efcff', fontSize: '1.2rem', marginLeft: '8px', fontFamily: 'inherit' }}>TypeScript</span>
      </h1>
      <CreateTodo saveTodo={saveTodo} />
    </header>
  );
};
