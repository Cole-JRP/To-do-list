import React, { useState } from 'react'
import { FaCheck, FaTimes, FaEdit, FaEllipsisV } from 'react-icons/fa'
import EditSection from './EditSection'
import Task from '../tasks_component/Task'
import Button from "../Button"
import AddTask from "../tasks_component/AddTask"

const Section = ({ section, addTask, deleteSection, deleteTask, showAddTask, toggleAddTask,
                   precedingSectionCompleted, toggleTaskCompletion, editSection, editTask,
                 }) => {

  const [isEditing, setIsEditing] = useState(false)
  const [showOptions, setShowOptions] = useState(false)

  const toggleOptions = () => {
    setShowOptions(!showOptions)
  }

  return (
    <div className='section'>
      {isEditing ? (
        <EditSection
          section={section}
          editSection={editSection}
          setIsEditing={setIsEditing}
        />
      ) : (
        <div className='section-functions'>
          <h2 className='section-title'>{section.title}</h2>
          {showOptions && (
            <div>
              <FaTimes
                style={{ color: 'red', cursor: 'pointer' }}
                onClick={() => deleteSection(section.id)}
              />
              <FaEdit
                onClick={() => setIsEditing(true)}
                style={{ cursor: 'pointer', marginLeft: '10px' }}
              />
            </div>
          )}
          <FaEllipsisV className='icon'
                       onClick={toggleOptions}
                       style={{ cursor: 'pointer' }}
          />
          <Button
            color=''
            text={showAddTask ? 'Close' : 'Add Task'}
            onClick={() => toggleAddTask(section.id)}
          />
          {section.completed && <FaCheck size={20} style={{ color: 'black' }} />}
        </div>
      )}
      {showAddTask && <AddTask sectionId={section.id} addTask={addTask} />}
      {section.tasks.length > 0 ? (
        section.tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            sectionId={section.id}
            deleteTask={deleteTask}
            toggleTaskCompletion={toggleTaskCompletion}
            canCheck={precedingSectionCompleted}
            editTask={editTask}
            showOptions={showOptions}
          />
        ))
      ) : (
        'No current tasks'
      )}
    </div>
  )
}

export default Section
