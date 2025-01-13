import { useState } from 'react'

// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   return (
//     <div>
//       code here
//     </div>
//   )
// }

const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad;
  console.log(all)
  const avg = (props.good - props.bad) / all;
  const pos_percent = props.good / all  * 100;
  if (all === 0) {
  return (
    <div>
      <h1> statistics </h1>
      <p>No feedback given</p>
    </div>
  )
  } else {
    return (
      <div>
        <Display value={"good "+props.good} />
        <Display value={"neutral "+props.neutral} />
        <Display value={"bad "+props.bad} />
        <Display value={"all " + all} />
        <Display value={"average " + avg} />
        <Display value={"positive " + pos_percent + " %"} />
      </div>
    )
  }  
}

const App = () => {

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
    <h1>give feedback</h1>
    <div>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
    </div>
    <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App