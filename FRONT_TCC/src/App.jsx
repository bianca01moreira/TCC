import {Routes, Route} from 'react-router-dom'
import Tela_login from './login/Tela_login'
import Cadastrar from './login/Cadastrar'
import Tela_inicial from './Paginas/VisaoGeral'
import Medicamentos from './Paginas/Medicamentos'
import '/global.css'

function App() {
  return (
    <>  
      <Routes>
          <Route path="/" element={<Tela_login/>}/>
          <Route path="/Cadastrar" element={<Cadastrar/>}/>
          <Route path="/VisaoGeral" element={<Tela_inicial/>}/>
          <Route path="/Medicamentos" element={<Medicamentos/>}></Route>
        </Routes>
    </>
  )
}

export default App
