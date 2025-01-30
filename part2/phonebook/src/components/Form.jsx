// const Form = ({ handleSubmit, fields }) => {
//     // console.log(handleSubmit)
//     // console.log(fields)
//     // console.log(fields[0].title)
//     return (
//       <form>
//         <div>
//           {fields.forEach(field => 
//           <>
//             {console.log(field)},
//             <div key={field}/>,
//             <InputField key={field[0]} title={field[0]} value={field[1]} handleValueChange={field[2]} />
//             </>
//           )}
//         </div>
//         <div>
//           <button type="submit" onClick={handleSubmit}>add</button>
//         </div>
//       </form>
//     )
// }

const InputField = ({ title, value, handleValueChange }) => {

    return (
        <div>
        {title}:
      <input
        value={value}
        onChange={handleValueChange}
      />
      </div>

    )
}

export default InputField