import { type Todo as TodoType } from '../types';
import { type TodoId, type TodoCompleted } from '../types';

interface Props extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void;
  onToggleCompleteTodo: ({ id, completed }: { id: TodoId, completed: TodoCompleted }) => void;
}

export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onRemoveTodo,
  onToggleCompleteTodo
}) => {

  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    onToggleCompleteTodo({
      id: { id },
      completed: { completed: event.target.checked }
    })
  }

  return (
    <div className='view'>
      <input
        className='toggle'
        type='checkbox'
        checked={completed}
        onChange={handleChangeCheckbox}
      />
      <label>{title}</label>
      <button
        className='destroy'
        onClick={() => {
          onRemoveTodo({ id });
        }}
      />
    </div>
  );
};
