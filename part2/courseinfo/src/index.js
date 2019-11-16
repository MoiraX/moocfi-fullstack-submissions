import React from 'react';
import ReactDOM from 'react-dom';

const Course = ({ course }) => {
  return (
    <div>
      <Header courseName={course.name} />
      <Content partsList={course.parts} />
      <Total partsList={course.parts} />
    </div>
  )
}

const Header = ({ courseName }) => {
  return (
    <div>
      <h1>{courseName}</h1>
    </div>
  )
}

const Content = ({ partsList }) => {
  const parts = () => partsList.map(part =>
    <Part key={part.id} name={part.name} exercises={part.exercises} />
  )

  return (
    <div>
      {parts()}
    </div>
  )
}  

const Part = ({ name, exercises}) => {
  return (
    <div>
      <p>
        {name} {exercises}
      </p>
    </div>
  )
} 

const Total = ({ partsList}) => {
  const totalExercises = partsList.reduce((total, part) => total + part.exercises, 0)
  return (
    <div>
      <h3>Total of {totalExercises} exercises</h3>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }
  
  return (
    <div>
      <Course course={course} />
    </div>
  )
}
  
ReactDOM.render(<App />, document.getElementById('root'))
