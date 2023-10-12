import { combineReducers } from 'redux'

import tasksReducer from "./tasksReducer"

const reducers = combineReducers({
    tasks: tasksReducer,
});

export default reducers;