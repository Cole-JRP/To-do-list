import React, { useState } from 'react';

const AddTask = ({ sectionId, addTask }) => {
    const [newTask, setNewTask] = useState('')

    const onAddTask = (e) => {
        e.preventDefault()

        if (!newTask) {
            alert('Please add a task')
            return
        }

        const trimmedTask = newTask.trim()
        if (trimmedTask) {
            addTask(sectionId, trimmedTask)
            setNewTask('')
        }
    }
    return (
        <form className={'add-task-form'}
              onSubmit={onAddTask}>
            <div className={'form-control'}>
                <label>Task</label>
                <input
                    type={'text'}
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder={'Add Task'}/>
            </div>

            <input
                type='submit'
                value='Add Task'
                className='btn btn-block'
            />

        </form>
    )
}

export default AddTask