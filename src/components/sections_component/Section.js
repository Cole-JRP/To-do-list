import { FaTimes } from  'react-icons/fa'
import { FaCog } from 'react-icons/fa'
import Task from '../tasks_component/Task'
import Button from "../Button";
import AddTask from "../tasks_component/AddTask";
import React from 'react'
 const Section = ({ section, addTask, deleteSection, deleteTask, showAddTask, toggleAddTask, toggleTaskCompletion }) => {
    return (
        <div className='section'>
          <h2>{section.title}
            <FaTimes style={{ color: 'red', cursor: 'pointer' }}
                     onClick={() => deleteSection(section.id)}/>
            <Button
              color=''
              text={showAddTask ? 'Close' : 'Add '}
              onClick={() => toggleAddTask(section.id)}/>

            {showAddTask && <AddTask sectionId={section.id} addTask={addTask}/>}


            </h2>
        <div>
                {section.tasks.map(task => (
                        <Task
                          key={task.id}
                          task={task}
                          sectionId={section.id}
                          deleteTask={deleteTask}
                          toggleTaskCompletion={toggleTaskCompletion}
                        />
                ))}
        </div>
        </div>
    )
}
export default Section