
import Section from "./Section";
import React from 'react'
const Sections = ({ sections, deleteSection, deleteTask, addTask, showAddTask, toggleAddTask, toggleTaskCompletion }) => {

    return (
        <>
            {sections.map((section) => (
                <Section
                    key={section.id}
                    section={section}
                    deleteSection={deleteSection}
                    deleteTask={deleteTask}
                    addTask={addTask}
                    showAddTask={showAddTask}
                    toggleAddTask={toggleAddTask}
                    toggleTaskCompletion={toggleTaskCompletion}
                    />
            ))}
        </>
    )
}
export default Sections