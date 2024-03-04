import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  isLoading: false,
  theme: 'light'
}

const app = createSlice( {
  name: 'app',
  initialState,
  reducers: {
    setLoading: ( state, action ) => {
      state.isLoading = action.payload
    },
    toggleTheme: ( state ) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light'
    }
  }
} )

export const {
  setLoading,
  toggleTheme,
} = app.actions
export const appSlice = app.reducer
