import { useState } from 'react'
import './App.css'
import Header from './Header'
import { courses } from './veri'
import Course from './Component/Course'
import './css/Courses.css';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <div className='course-main'>
      {
        courses?.map((course) =>(
          <Course key ={course.id} course={course} />
        ))
      }
      </div>
    </>
  )
}

export default App
