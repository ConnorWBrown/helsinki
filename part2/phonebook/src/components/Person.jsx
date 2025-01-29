const Person = ({ name, number }) => {
    console.log(name)
    return (
       <>
        {console.log(name)}
        <div>{name} {number}</div>
       </>
    )
  }

export default Person