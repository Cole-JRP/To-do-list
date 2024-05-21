import React, { useState } from 'react'
import Header from './components/Header'
import Sections from "./components/sections_component/Sections";
import AddSection from "./components/sections_component/AddSection";
function App() {
    const [showAddSection, setShowAddSection] = useState(false)
    const [showAddTask, setShowAddTask] = useState(false)
    const [sections, setSections] = useState([
        {
            id: 1,
            title: 'Foundation',
            completed: false,
            tasks: [
                { id: 1, text: 'Task 1 ', completed: false },
                { id: 2, text: 'Task 2 ', completed: false },
                { id: 3, text: 'Task 3 ', completed: false },
                { id: 4, text: 'Task 4 ', completed: false },
            ],
        },
        {
            id: 2,
            title: 'Discovery',
            completed: false,
            tasks: [
                { id: 1, text: 'Task 1 ', completed: false },
                { id: 2, text: 'Task 2 ', completed: false },
            ],
        },
        {
            id: 3,
            title: 'Delivery',
            completed: false,
            tasks: [
                { id: 1, text: 'Task 1', completed: false },
                { id: 2, text: 'Task 2 ', completed: false },
            ],
        },
    ])

           const addSection = (title) => {
        const newSection = { id: Date.now(), title,  completed: false, tasks: [] }
        setSections([...sections, newSection])
    }

       const addTaskToSection = (sectionId, taskText) => {
        setSections(sections.map(section => {
                  if (section.id === sectionId) {
                  return { ...section, tasks: [...section.tasks,
                      { id: Date.now(), text: taskText, completed: false }] }
                  }
            return section
        }))
       }
    const deleteSection = (sectionId) => {
        setSections(prevSections =>
            prevSections.filter(section => section.id !== sectionId))

    }

    const deleteTask = (sectionId, taskId) => {
        setSections(prevSections =>
            prevSections.map(section =>
                section.id === sectionId
            ? {
                        ...section,
                        tasks: section.tasks.filter(task => task.id !== taskId),
                    }
                    : section
            )
        )
    }

    const toggleTaskCompletion = (sectionId, taskId) => {
      setSections(sections.map(section => {
        if (section.id === sectionId) {
          return { ...section, tasks: section.tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
            )
          }
        }
      }))
    }



  return (
    <div className='container'>
        <Header onAddSection={() => setShowAddSection (!showAddSection)}
                showAddSection={showAddSection} />
        {showAddSection && <AddSection addSection={addSection} />}
        {sections.length > 0 ? (
          <Sections
            sections={sections}
            deleteSection={deleteSection}
            addTask={addTaskToSection}
            deleteTask={deleteTask}
            showAddTask={showAddTask}
            toggleAddTask={() => setShowAddTask (!showAddTask)}
            toggleTaskCompletion={toggleTaskCompletion}/>
            ) : ( 'No Sections' )}
    </div>
  );
}


export default App;
