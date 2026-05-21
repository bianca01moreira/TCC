import {Routes, Route} from 'react-router-dom'
import Tela_login from './login/Tela_login'
import Cadastrar from './login/Cadastrar'
import Tela_inicial from './Paginas/Tela_inicial'
import '/global.css'

function App() {
  return (
    <>  
      <Routes>
          <Route path="/" element={<Tela_login/>}/>
          <Route path="/Cadastrar" element={<Cadastrar/>}/>
          <Route path="/Principal" element={<Tela_inicial/>}/>
        </Routes>
    </>
  )
}

export default App
