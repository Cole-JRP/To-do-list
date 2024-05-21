import {FaTimes} from 'react-icons/fa'

const Task = ({ task, sectionId, deleteTask, toggleTaskCompletion }) => {
    return (
        <div className='task'>

            <h3>
              <input type="checkbox"
                     checked={task.completed}
                     onChange={() => toggleTaskCompletion(sectionId, task.id)}
                     />
                   {task.text} - {task.completed ? 'Completed' : 'Pending'}

            <FaTimes style={{
                     color:
                    'red', cursor: 'pointer' }}
                     onClick={() => deleteTask(sectionId, task.id)} />
                     </h3>

        </div>
    )
}
export default Task