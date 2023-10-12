import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [
    {id: 1, title: 'Learn React', on_date: '2023-01-22', is_done: false},
    {id: 2, title: 'Apply React', on_date: '2023-01-22', is_done: false}
  ],
}

export const TasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    add: (state, action) => {
        state.value = [action.payload, ...state.value]
    },
    toggle: (state, action) => {
        state.value = state.value.map((task)  =>
            task.id === action.payload ? {...task, is_done: !task.is_done} : task
        );
    },
    remove (state, action) {
        state.value = state.value.filter((task) => task.id !== action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { add, toggle, remove } = TasksSlice.actions

export default TasksSlice.reducer