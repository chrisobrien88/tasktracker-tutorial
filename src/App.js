import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doc appt',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Vet appt',
        day: 'Feb 10th at 6:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Hair appt',
        day: 'March 15th at 12:30pm',
        reminder: false,
    }
])

// delete task
const deleteTask = (id) => {
  setTasks(tasks.filter(task => task.id !== id))
}

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map(task => task.id === id? {
    ...task, reminder: !task.reminder}: task))
}

  return (
    <div className="container">
      <Header title='Tasks'/>
      {tasks.length > 0 ? 
        <Tasks tasks={tasks} 
        onDelete={deleteTask} 
        onToggle={toggleReminder}/>
        : ("Create a new task")}
        
      
    </div>
    
  );
}

export default App;
