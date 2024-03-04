import {createSlice} from "@reduxjs/toolkit"
import { Todos } from "../../../types.ts"
import {MAX_LENGTH} from "../../../utils/constants.ts"

const initialState: Todos = {
  todos: [
    { id: 1, title: "Read a book", completed: false, },
    { id: 2, title: "Eat burger", completed: false, },
    { id: 3, title: "Watch tv", completed: false, },
    { id: 4, title: "Play football", completed: false, },
  ],
}

const todos = createSlice( {
  name: 'todos',
  initialState,
  reducers: {
    addTodo: ( state, action ) => {
      const { title } = action.payload

      if ( title.length <= MAX_LENGTH ) {
        const existingIds = state.todos.map( todo => todo.id )
        const newId = Math.max( ...existingIds, 0 ) + 1

        const newTodo = {
          id: newId,
          title,
          completed: false,
        }
        state.todos.push( newTodo )
      } else {
        throw new Error( `The todo must be ${MAX_LENGTH} characters or less.` )
      }
    },
    updateTodo: ( state, action ) => {
      const { id, title, completed } = action.payload
      const index = state.todos.findIndex( todo => todo.id === id )

      if ( index !== -1 ) {
        // Створюємо копію об'єкта задачі зі стану
        const updatedTodo = { ...state.todos[index] }

        // Оновлюємо дані задачі залежно від наявності нових даних
        if ( title !== undefined ) {
          updatedTodo.title = title
        }
        if ( completed !== undefined ) {
          updatedTodo.completed = completed
        }

        // Замінюємо задачу у списку за її індексом на оновлену версію
        state.todos[index] = updatedTodo
      }
    },
    deleteTodo: ( state, action ) => {
      const { id } = action.payload
      state.todos = state.todos.filter( todo => todo.id !== id )
    },
  }
} )

export const {
  addTodo,
  updateTodo,
  deleteTodo,
} = todos.actions
export const todosSlice = todos.reducer
