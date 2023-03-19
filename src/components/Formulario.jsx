import Input from './Input'
import Button from './Button'
import useForm from '../hooks/useForm'

const Formulario = ({handleSubmit}) => {
    const [form, handleChange, reset] = useForm({
        name: "",
        lastname:"",
        email:""
      })

    const submit = (e) =>{
        e.preventDefault()
        handleSubmit(form)
        reset()
    }

  return (
    <form onSubmit={submit}>
            <Input label="Nombre" type="text" name="name" value={form.name} onChange={handleChange} />
            <Input label="Apellido" type="text" name="lastname" value={form.lastname} onChange={handleChange} />
            <Input label="Email" type="email" name="email" value={form.email} onChange={handleChange} />
            <Button>Enviar</Button>
    </form>
  )
}

export default Formulario

