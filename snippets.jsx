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

// Promises
function doSomething() {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Other things to do before completion of the promise
        console.log("Did something");
        // The fulfillment value of the promise
        resolve("https://example.com/");
      }, 200);
    });
  }

//OR
doSomething()
  .then(function (result) {
    return doSomethingElse(result);
  })
  .then(function (newResult) {
    return doThirdThing(newResult);
  })
  .then(function (finalResult) {
    console.log(`Got the final result: ${finalResult}`);
  })
  .catch(failureCallback);

// OR
doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => {
    console.log(`Got the final result: ${finalResult}`);
  })
  .catch(failureCallback);
  


// Terminal tools
//json-server stores all the data in the db.json file, which resides on the server. In the real world, data would be stored in some kind of database. However, json-server is a handy tool that enables the use of server-side functionality in the development phase without the need to program any of it.
// from root dir, with db.json in root dir:
'json-server --port 3001 --watch db.json'
// Vite setup
'npm create vite@latest projectname -- --template react'
'cd projectname && npm install'
'npm run dev'