import {createSlice} from "@reduxjs/toolkit"
import {TaskStatuses} from "../../../types.ts"

const initialState = {
  todos: [
    { id: 1, todo: "Read a book", status: TaskStatuses.InProgress, },
    { id: 2, todo: "Eat burger", status: TaskStatuses.Completed, },
    { id: 3, todo: "Watch tv", status: TaskStatuses.InProgress, },
    { id: 4, todo: "Play football", status: TaskStatuses.Completed, },
  ],
}

const todos = createSlice( {
  name: 'todos',
  initialState,
  reducers: {

  }
} )

export const {} = todos.actions
export const todosSlice = todos.reducer
