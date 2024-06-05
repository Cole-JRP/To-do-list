import { FaTimes, FaEdit } from 'react-icons/fa'
import EditTask from './EditTask'
import React, { useState } from 'react'

const Task = ({ task, sectionId, deleteTask, toggleTaskCompletion, canCheck, editTask, showOptions}) => {
  const [isEditing, setIsEditing] = useState(false)

  return (
        <div className='task'>

          {isEditing ? (
            <EditTask
              task={task}
              sectionId={sectionId}
              editTask={editTask}
              setIsEditing={setIsEditing}
            />
          ) : (
            <>
              <input type="checkbox"
                     checked={task.completed}
                     onChange={() => canCheck && toggleTaskCompletion(sectionId, task.id)}
                     disabled={!canCheck} />

                 <h4 className='task-text'> {task.text} </h4>

              {showOptions && (
                   <div className='icon-actions'>
            <FaTimes
                     style={{ color: 'red', cursor: 'pointer' }}
                     onClick={() => deleteTask(sectionId, task.id)} />

              <FaEdit
                      onClick={() => setIsEditing(true)}
                      style={{ cursor: 'pointer', marginLeft: '10px' }} />
                      </div>
              )}

                     </>
            )}
        </div>
    )
}

export default Task