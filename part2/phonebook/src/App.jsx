import { useState } from 'react'
import Person from './components/Person.jsx'

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
    console.log(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
    console.log(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name:       
        <input
          value={newName}
          onChange={handleNameChange}
        />

        </div>
        <div>
          number:
          <input
          value={newNumber}
          onChange={handleNumberChange}
        />

        </div>
        <div>
          <button type="submit" onClick={addPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {/* <div>debug: {newName}</div> */}
      {persons.map(person => 
        <Person key={person.name} name={person.name} number={person.number} />
      )}

      </div>
  )
}

export default App