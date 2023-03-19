import useForm from './hooks/useForm'
import Input from './components/Input'
import Card from './components/Card'
import Button from './components/Button'
import "./App.css"

function App() {
  
  const [form, handleChange] = useForm({
    name: "",
    lastname:"",
    email:""
  })

  return (
    <div className='App'>
      <Card>
        <form>
          <Input label="Nombre" type="text" name="name" value={form.name} onChange={handleChange} />
          <Input label="Apellido" type="text" name="lastname" value={form.lastname} onChange={handleChange} />
          <Input label="Email" type="email" name="email" value={form.email} onChange={handleChange} />
          <Button>Enviar</Button>
        </form>
      </Card>
    </div>
  )
}

export default App
