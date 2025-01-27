const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p>total of {sum} exercises</p>

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

// const Content = ({ props }) => {
//   const { parts } = props
//   return (
//     {parts.map(item =>
//       console.log(item)
//         <Part part={item} />
//     )}
//   )
// }

const Content = ({ parts }) => {
  return (
    <>
      {parts.map(part => 
        <Part key={part.id} part={part} />
      )}
    </>
  )
}

  // <>
  //   {/* {parts => <Part key={part.name} part={part}></Part>} */}
  //   {
  //   parts.map(part =>
  //     <Part key={part.name}>
  //       {part}
  //     </Part>
  //   )
  //   }
  //   <Part
  //     part={parts[0]} 
  //   />
  //   <Part
  //     part={parts[1]} 
  //   />
  //   <Part
  //     part={parts[2]} 
  //   />      
  // </>

const App = () => {
  const course = {
    id: 1,
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

  return <Course course={course} />
}

export default App