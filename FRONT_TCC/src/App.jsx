import {Routes, Route} from 'react-router-dom'
import Tela_login from './login/Tela_login'
import Cadastrar from './login/Cadastrar'
import '/global.css'

function App() {
  return (
    <>  
      <Routes>
          <Route path="/" element={<Tela_login/>}/>
          <Route path="/Cadastrar" element={<Cadastrar/>}/>
        </Routes>
    </>
  )
}

export default App
