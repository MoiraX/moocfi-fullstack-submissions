import React from 'react';

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
    <h2>{courseName}</h2>
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

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  )
}

const Total = ({ partsList }) => {
  const totalExercises = partsList.reduce((total, part) => total + part.exercises, 0)
  return (
    <h3>Total of {totalExercises} exercises</h3>
  )
}

export default Course
