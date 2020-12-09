import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creactes } = createActions({
  addTodo: ['text'],
  toggleTodo: ['id'],
  removeTodo: ['id'],
});

const add = (state = INITIAL_STATE, action) => [
  ...state,
  { id: Math.random(), text: action.text, complate: false },
];

const toggle = (state = INITIAL_STATE, action) =>
  state.map((todo) =>
    todo.id === action.id ? { ...state, complate: !todo.complate } : todo
  );

const remove = (state = INITIAL_STATE, action) =>
  state.filter((todo) => todo.id !== action.id);
const INITIAL_STATE = [];

export default createReducer(INITIAL_STATE, {
  [Types.ADD_TODO]: add,
  [Types.TOGGLE_TODO]: toggle,
  [Types.REMOVE_TODO]: remove,
});

// export const Creators = {
//   addTodo: (text) => ({
//     type: Types.ADD,
//     payload: {
//       text,
//     },
//   }),

//   toggle: (id) => ({
//     type: Types.TOGGLE,
//     payload: {
//       id,
//     },
//   }),
//   removeTodo: (id) => ({
//     type: Types.REMOVE,
//     payload: {
//       id,
//     },
//   }),
// };
