import {Routes, Route} from 'react-router-dom'
import Tela_login from './login/Tela_login'
import Cadastrar from './login/Cadastrar'
import Tela_inicial from './Paginas/VisaoGeral'
import Medicamentos from './Paginas/Medicamentos'
import Layout from './Paginas/Componentes/Layout'
import '/global.css'
import VisaoGeral from './Paginas/VisaoGeral'

function App() {
  return (
    <>  
      <Routes>
          <Route path="/" element={<Tela_login/>}/>
          <Route path="/Cadastrar" element={<Cadastrar/>}/>

         <Route element={<Layout/>}>
              <Route path="/VisaoGeral" element={<VisaoGeral/>}/>
              <Route path="/Medicamentos" element={<Medicamentos/>}/>
              {/* <Route path="/Relatorios" element={<Relatorios/>}/>
              <Route path="/Historico" element={<Historico/>}/>
              <Route path="/Receitas" element={<Receitas/>}/>
              <Route path="/Profissionais" element={<Profissionais/>}/>
              <Route path="/Dependentes" element={<Dependentes/>}/>
              <Route path="/Configuracoes" element={<Configuracoes/>}/>
               */}
          </Route>
        </Routes>
    </>
  )
}

export default App
