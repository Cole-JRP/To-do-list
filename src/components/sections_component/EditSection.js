import React, { useState } from 'react'

const EditSection = ({ section, editSection, setIsEditing }) => {
  const [editTitle, setEditTitle] = useState(section.title)

  const handleEdit = () => {
    editSection(section.id, editTitle)
    setIsEditing(false)
  }

  return (
    <div className='edit-section'>
      <input
        type='text'
        value={editTitle}
        onChange={(e) => setEditTitle(e.target.value)}
      />
      <button className='edit-buttons' onClick={handleEdit}>Save</button>
      <button className='edit-buttons' onClick={() => setIsEditing(false)}>Cancel</button>
    </div>
  )
}

export default EditSection