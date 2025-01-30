import Person from './Person.jsx'

const Persons = ({ persons }) => {
    console.log(persons)
    return (
      persons.map(person => 
          <Person key={person.name} name={person.name} number={person.number} />
      )
    )
    }

export default Persons