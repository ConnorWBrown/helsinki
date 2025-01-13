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

const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = newValue => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad;
  const avg = (good - bad) / all;
  const pos_percent = good / all  * 100;
  
  return (
    <>
    <h1>give feedback</h1>
    <div>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <h1> statistics </h1>
      <Display value={"good "+good} />
      <Display value={"neutral "+neutral} />
      <Display value={"bad "+bad} />
      <Display value={"all " + all} />
      <Display value={"average " + avg} />
      <Display value={"positive " + pos_percent + " %"} />
    </div>
    </>
  )
}

export default App
