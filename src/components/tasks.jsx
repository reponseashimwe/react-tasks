import Flex from './flex';
import Button from './button';
import { useContext } from 'react';
import { FaTrash,FaCheck } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { toggle, remove } from "../state/reducers/tasksSlice";
import { TasksContext } from '../state/contexts/tasksContext'

const Link = require('react-router-dom').Link

const Tasks = () => {
    const dispatch = useDispatch();
    const tasks = useContext(TasksContext);
    return (  
        <>
            <Flex className='pad-20 header'>
                <h3>Tasks ({tasks.length})</h3>
                <Link to="add"><Button className='outline'>Add task</Button></Link>
            </Flex>
            <div className="tasks-container">
                {tasks.map((task) => (
                        <div className={`task ${task.is_done !== '0'? 'done':''}`} onDoubleClick={() => dispatch(toggle(task.id))} key={task.id}>
                            <Flex>
                                <Flex>
                                    <div className='done'>
                                        <FaCheck />
                                    </div>
                                    <div>
                                        <p className='title'>{task.title}</p>
                                        <p className='date'>{task.on_date}</p>
                                    </div>
                                </Flex>
                                <Button className='icon' click={() => dispatch(remove(task.id))}><FaTrash /></Button>
                            </Flex>
                        </div>
                    
                ))}
            </div>
        </>
    );
}
 
export default Tasks;