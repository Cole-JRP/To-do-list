import React, { useState } from 'react'

const EditTask = ({ task, sectionId, editTask, setIsEditing }) => {
  const [editText, setEditText] = useState(task.text)

  const handleEdit = () => {
    editTask(sectionId, task.id, editText)
    setIsEditing(false)
  }

  return (
    <div className='edit-task'>
          <input
            type='text'
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button className='edit-buttons' onClick={handleEdit}>Save</button>
          <button className='edit-buttons' onClick={() => setIsEditing(false)}>Cancel</button>

    </div>
  )
}
export default EditTask