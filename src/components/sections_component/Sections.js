import React from 'react'
import Section from "./Section"

const Sections = ({ sections, deleteSection, deleteTask, addTask, showAddTask,
                      toggleAddTask, toggleTaskCompletion, editTask, editSection}) => {

    return (
        <>
            {sections.map((section, index) => (
                <Section
                    key={section.id}
                    section={section}
                    deleteSection={deleteSection}
                    deleteTask={deleteTask}
                    addTask={addTask}
                    showAddTask={showAddTask === section.id}
                    toggleAddTask={toggleAddTask}
                    toggleTaskCompletion={toggleTaskCompletion}
                    precedingSectionCompleted={index === 0 || sections[index - 1].completed}
                    editSection={editSection}
                    editTask={editTask}
                    />
            ))}
        </>
    )
}
export default Sections