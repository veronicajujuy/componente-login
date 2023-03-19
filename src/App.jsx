import Card from './components/Card'
import "./App.css"
import { useState } from 'react'
import Formulario from './components/Formulario'

function App() {
  const [users, setUsers] = useState([])
 
  const handleSubmit = usuario => {
    setUsers([...users, usuario])
  }

  return (
    <div className='App'>
        <div className='container'>
        <Card>
          <Formulario handleSubmit={handleSubmit}/>
        </Card>
        <Card>
          <h2>Usuarios:</h2>
          {users.map(user => 
            <li key={user.name}>{`${user.name} ${user.email}`}</li>
          )}
        </Card>
      </div>
    </div>
  )
}

export default App
