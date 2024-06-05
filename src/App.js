import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Sections from "./components/sections_component/Sections"
import AddSection from "./components/sections_component/AddSection"

function App() {
    const [showAddSection, setShowAddSection] = useState(false)
    const [showAddTask, setShowAddTask] = useState(false)
    const [sections, setSections] = useState([])

  useEffect(() => {
    const getSections = async () => {
      const sectionsFromServer = await fetchSections()
      setSections(sectionsFromServer)
    }
    getSections()
  }, [])

  const fetchSections = async () => {
    const res = await fetch('http://localhost:5000/sections')
    const data = await res.json()
    return data

  }

     const addSection = async (title) => {
      const newSection = { title,  completed: false, tasks: [] }
        const res = await fetch('http://localhost:5000/sections',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newSection),
        })
             const data = await res.json()
             setSections([...sections, data])
    }

  const addTaskToSection = async (sectionId, taskText) => {
    const newTask = { text: taskText, completed: false, id: Date.now() }
    const section = sections.find((section) => section.id === sectionId)
    section.tasks.push(newTask);

    const res = await fetch(`http://localhost:5000/sections/${sectionId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(section),
    })

    const data = await res.json()
    setSections(sections.map(section => section.id === sectionId ? data : section))
  }

    const deleteSection = async (sectionId) => {
      await fetch(`http://localhost:5000/sections/${sectionId}`, {
        method: 'DELETE',
      })
      setSections(sections.filter((section) => section.id !== sectionId))
    }

    const deleteTask = async (sectionId, taskId) => {
      const section = sections.find((section) => section.id === sectionId)
      section.tasks = section.tasks.filter((task) => task.id !== taskId)

      await fetch(`http://localhost:5000/sections/${sectionId}`, {
        method: 'PUT',
        headers: {
          'Content-type' : 'application/json',
        },
        body: JSON.stringify(section)
      })
      setSections(sections.map((section) => (section.id === sectionId ? section : section)))
    }

  const toggleAddTask = (sectionId) => {
    setShowAddTask((prevState) => (prevState === sectionId ? null : sectionId))
  }

  const toggleTaskCompletion = async (sectionId, taskId) => {
    const sectionIndex = sections.findIndex((section) => section.id === sectionId)
    const section = sections[sectionIndex]

    if (sectionIndex > 0) {
      const precedingSection = sections[sectionIndex - 1]
      if (!precedingSection.tasks.every(task => task.completed)) {
        return
      }
    }
    const task = section.tasks.find((task) => task.id === taskId)
    task.completed = !task.completed

    const sectionCompleted = section.tasks.every(task => task.completed)
    section.completed = sectionCompleted

    const res = await fetch(`http://localhost:5000/sections/${sectionId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(section),
    })

    const data = await res.json()
    setSections(sections.map(section => section.id === sectionId ? data : section))
  }

  const editSection = async (sectionId, newTitle) => {
      const section = sections.find((section) => section.id === sectionId)
      section.title = newTitle

      const res = await fetch(`http://localhost:5000/sections/${sectionId}`, {
        method: 'PUT',
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify(section),
      })

    const data = await res.json()
    setSections(sections.map(section =>
      section.id === sectionId ? data : section))
  }

  const editTask = async (sectionId, taskId, newText) => {
    const section = sections.find((section) => section.id === sectionId)
    const task = section.tasks.find((task) => task.id === taskId)
    task.text = newText

    const res = await fetch(`http://localhost:5000/sections/${sectionId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(section),
    })

    const data = await res.json()
    setSections(sections.map(section => section.id === sectionId ? data : section))
  }


  return (
      <Router>
    <div className='container'>
        <Header
          onAddSection={() => setShowAddSection (!showAddSection)}
          showAddSection={showAddSection} />
      <Routes>
        <Route
          path='/'
          element={
            <>
              {showAddSection && <AddSection addSection={addSection} />}
              {sections.length > 0 ? (
                <Sections
                  sections={sections}
                  deleteSection={deleteSection}
                  addTask={addTaskToSection}
                  deleteTask={deleteTask}
                  showAddTask={showAddTask}
                  toggleAddTask={toggleAddTask}
                  toggleTaskCompletion={toggleTaskCompletion}
                  editSection={editSection}
                  editTask={editTask}
                />
              ) : (
                'No current sections'
              )}
            </>
          }
          />
        <Route path='/about' element={<About />} />
      </Routes>
        <Footer />
    </div>
      </Router>
  )
}


export default App;
