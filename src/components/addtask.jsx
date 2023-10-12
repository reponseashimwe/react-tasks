import Button from './button';
import Flex from './flex';
import { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { add } from "../state/reducers/tasksSlice";
import { TasksContext } from "../state/contexts/tasksContext";

const Link = require('react-router-dom').Link

const AddTaskForm = () => {
    const dispatch = useDispatch();
    const tasks = useContext(TasksContext);
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [error, setError] = useState(false);
    const [id, setId] = useState(tasks[tasks.length - 1].id + 1);

    const submitForm = (e) => {
        e.preventDefault();
        
        if (empty(title) || empty(date)) {
            setError("Fill both title and date");
        } else { 
            setError(false);
            setId(id+1);
            let data={id: id, title, on_date: date, is_done: false};
            
            dispatch(add(data));
            result(true);
        }
    }

    const result = (data) => {
        if (data) {
            setTitle(''); setDate('');
            setError('Successfully added');
            setTimeout(() => { setError('') }, 5000);
        }
    };


    const empty = (value) => {
        return (value === null || value === "") ? true : false;
    }

    return ( 
        <>
            <Flex className='pad-20 header'>
                <h3>Add task</h3>
                <Link to="/"><Button className='outline'>View tasks</Button></Link>
            </Flex>
            <form action="" onSubmit={submitForm} id="add-form">
                <div className="input">
                    <label htmlFor="">Title</label>
                    <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="input">
                    <label htmlFor="">Date</label>
                    <input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>

                {   error && 
                    <div className="error">{ error }</div>
                }

                <div className="pad-20">
                    <Button className='block' text="Add a task" />
                </div>
            </form>
        </>
        
    );
}
 
export default AddTaskForm;