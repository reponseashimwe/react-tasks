import React from 'react';

import Tasks from './tasks';
import AddTaskForm from './addtask';
import { useSelector } from 'react-redux'
import { TasksContext } from '../state/contexts/tasksContext'

const Route = require('react-router-dom').Route
const Router = require('react-router-dom').BrowserRouter
const Routes = require('react-router-dom').Routes

function App () {
    const tasks = useSelector((store) => store).tasks.value;
    
    return (
        <div className='container'>
            <TasksContext.Provider  value={tasks}>
                <Router>
                    <Routes>
                        <Route path="/" element={<Tasks />} />
                        <Route path="/add" element={<AddTaskForm />} />
                    </Routes>
                </Router>
            </TasksContext.Provider>
            
            
        </div>
    );

}export default App ;
