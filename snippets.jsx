// Objects are not valid as a React child (found: object with keys
// Resolve this issue by mapping the individual parts of the object as props, not the whole object itself.
// Objects cannot be passed as props, only their properties can be passed as props.


// Map
return (
    <div>
      <ul>
        {persons.map(note => 
          <li key={note.id}>
            {note.number}
          </li>
        )}
      </ul>
    </div>
  )

//OR Map outside of html
return (
    persons.map(person => 
        <Person key={person.name} name={person.name} number={person.number} />
    )
)


// Check if a value within an array is equal - "tests whether at least one element in the array passes the test implemented by the provided function"
if (persons.some(person => person.name === newName)) {
    alert(`${newName} is already added to phonebook`)
    return
  } else {
    setPersons(persons.concat(personObject))
  }

