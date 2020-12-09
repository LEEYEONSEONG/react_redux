const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todes/TOGGLE_TODO';

let nextId = 1;
export const addTodo = (text) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    text,
  },
});

export const toggleTodp = (id) => ({
  type: TOGGLE_TODO,
  id,
});

const initialState = [
  {
    id: 1,
    text: '안녕하세요',
    done: false,
  },
];

export default function todes(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}
