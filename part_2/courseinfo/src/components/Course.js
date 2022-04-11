const Header = ({ coursename }) => <h2>{coursename}</h2>

const Total = ({ parts }) => {
  const exercises = parts.reduce((previousValue, currentValue) => previousValue + currentValue.exercises, 0)
  console.log("exercises", exercises)
  // const sum = course.parts.reduce((previousValue, currentValue) => previousValue + currentValue.exercises, 0)
  return (
    <b>Total of {exercises} exercises</b>
  )
}

const Part = ({ part }) =>
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => {
  console.log("contents", parts)
  return (
    <div>
      {parts.map(part =>
        <Part key={part.id} part={part} />
      )}
    </div>
  )
}

const Course = ({ course }) => {
  console.log("course", course)
  return (
    <div>
      <Header coursename={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course