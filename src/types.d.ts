import type { TODO_FILTERS } from "./types/consts";

//"d" in this file means it only has declarations, not code.
export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export type TodoId = Pick<Todo, 'id'>; //utility type "Pick", pick key from T
export type TodoTitle = Omit<Todo, 'completed' | 'id'>; //utility type "Omit", omit attributes, to only access the desired one.
export type TodoCompleted = Pick<Todo, 'completed'>;

export type ListOfTodos = Todo[];

//Union type from the values of the TODO_FILTERS object.
export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS];
