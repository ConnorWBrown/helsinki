import { useState } from 'react'
import Persons from './components/Persons.jsx'
import InputField from './components/Form.jsx'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '5308675309' },
    { name: 'smbdy', number: '5038675309' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    } else {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')  
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
    // console.log(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
    // console.log(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      {/* <Form handleSubmit={addPerson} fields={[
        [ 'namefld', {newName}, {handleNameChange} ],
        [ 'numberfld', {newNumber}, {handleNumberChange} ]
      ]} /> */}

{/* <Form handleSubmit={addPerson} fields={[
        { title: 'namefld', value: newName, handleValueChange: {handleNameChange} },
        { title: 'numberfld', value: newNumber, handleValueChange: {handleNumberChange} }
      ]} /> */}

      <form>
        {/* {console.log(persons)} */}
        <InputField title='name' value={newName} handleValueChange={handleNameChange} />
        <InputField title='number' value={newNumber} handleValueChange={handleNumberChange} />

        <div>
          <button type="submit" onClick={addPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={persons} ></Persons>
      </div>
  )
}

export default App