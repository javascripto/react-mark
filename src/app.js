import React, { useState } from 'react';

import { lower } from './utils'
import Highlight from './highlight'

// https://youtu.be/my9wmfOkIP4

const App = () => {
  const [ word, setWord ] = useState('');
  const [ courseName, setCourseName ] = useState('')
  const [ courseHours, setCourseHours ] = useState('')

  const handleChange = setValueStateFn => e => setValueStateFn(e.target.value)

  return (
    <>
      <input type="text" value={word} onChange={handleChange(setWord)}/>
      <p>
        <Highlight toHighlight={word}>Texto a ser marcado.</Highlight>
      </p>
      <p>
        <Highlight toHighlight={word} children="Um outro texto que poderá também ser marcado." />
      </p>

      <table>
        <thead>
          <tr>
            <th>Cursos</th>
            <th>Horas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="text" value={courseName} onChange={handleChange(setCourseName)}/></td>
            <td><input type="text" value={courseHours} onChange={handleChange(setCourseHours)}/></td>
          </tr>
          {courses
            .filter(({name}) => lower(name).includes(lower(courseName)))
            .map(({name, hours}) => (
              <tr key={name}>
                <td>
                  <Highlight
                    children={name} 
                    toHighlight={courseName} />
                </td>
                <td>
                  <Highlight
                    children={hours + 'h'}
                    toHighlight={courseHours} />
                </td>
              </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

const courses = [
  {
    name: 'Javascript Ninja',
    hours: 42
  },
  {
    name: 'React.js Ninja',
    hours: 60
  }
]

export default App
