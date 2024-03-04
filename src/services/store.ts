import {configureStore} from "@reduxjs/toolkit"
import {appSlice, todosSlice} from "./features"


export const store = configureStore( {
  reducer: {
    app: appSlice,
    todos: todosSlice,
  }
} )

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
