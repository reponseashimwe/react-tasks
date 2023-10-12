import { configureStore } from '@reduxjs/toolkit'
import TasksReducer from "./reducers/tasksSlice"

export const store = configureStore({
  reducer: {
    tasks: TasksReducer,
  },
}) 