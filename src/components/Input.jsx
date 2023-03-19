import "./input.css"
const Input = ({label, ...resto}) => {
  return (
    <div className='field'>
        <label>{label}</label>
        <input {...resto}/>
    </div>
  )
}

export default Input
