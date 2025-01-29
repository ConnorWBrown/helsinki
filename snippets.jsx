// Objects are not valid as a React child (found: object with keys
// Resolve this issue by mapping the individual parts of the object as props, not the whole object itself.
// Objects cannot be passed as props, only their properties can be passed as props.


// Map
    <ul>
    {notesToShow.map(note => 
      <Note key={note.id} note={note} />
    )}
  </ul>


// Check if a value within an array is equal - "tests whether at least one element in the array passes the test implemented by the provided function"
if (persons.some(person => person.name === newName)) {
    alert(`${newName} is already added to phonebook`)
    return
  } else {
    setPersons(persons.concat(personObject))
  }

