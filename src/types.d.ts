//"d" in this file means it only has declarations, not code.
export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}
export type ListOfTodos = Todo[];
