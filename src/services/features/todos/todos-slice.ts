import {createSlice} from "@reduxjs/toolkit"
import { Todos } from "../../../types.ts"

const initialState: Todos = {
  todos: [],
}

const todos = createSlice( {
  name: 'todos',
  initialState,
  reducers: {
    addTodo: ( state, action ) => {
      const { title } = action.payload

      if ( title ) {
        const existingIds = state.todos.map( todo => todo.id )
        const newId = Math.max( ...existingIds, 0 ) + 1

        const newTodo = {
          id: newId,
          title,
          completed: false,
        }
        state.todos.push( newTodo )
      }
    },
    updateTodo: ( state, action ) => {
      const { id, title, completed } = action.payload
      const index = state.todos.findIndex( todo => todo.id === id )

      if ( index !== -1 ) {
        const updatedTodo = { ...state.todos[index] }
        if ( title !== undefined ) {
          updatedTodo.title = title
        }
        if ( completed !== undefined ) {
          updatedTodo.completed = completed
        }

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
