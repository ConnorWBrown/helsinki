// Objects are not valid as a React child (found: object with keys
// Resolve this issue by mapping the individual parts of the object as props, not the whole object itself.
// Objects cannot be passed as props, only their properties can be passed as props.


// Map
    <ul>
    {notesToShow.map(note => 
      <Note key={note.id} note={note} />
    )}
  </ul>
