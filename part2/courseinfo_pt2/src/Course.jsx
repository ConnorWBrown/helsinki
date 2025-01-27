const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p style={{"font-weight" : "bold"}}>total of {sum} exercises</p>

const Course = ({ course }) => {
  const { name, parts } = course
  const total = parts.reduce((acc, part) => acc + part.exercises, 0)

  return (
    <>
      <Header course={name} />
      <Content parts={parts} />
      <Total sum={total} />
    </>
  )
}

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => {
  return (
    <>
      {parts.map(part => 
        <Part key={part.id} part={part} />
      )}
    </>
  )
}

export default Course