import { height, width } from '@fortawesome/free-brands-svg-icons/fa11ty'
import { faDisplay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Botoes from './Botoes.jsx'
import { useState } from 'react'
const botao = {
    backgroundColor: "transparent",
    border:"none"
}
const divPrincipal = {
    minHeight:"80vh",
    display:"flex",
    justifyContent:"space-between",
    width:"13%",
    padding:"5px",
    backgroundColor:"#ffff",
    boxShadow: "0px 8px 20px rgba(86, 86, 86, 0.12)", 
}
const divSecundaria = {
    display:"flex",
    minHeight:"50vh",
    flexDirection:"column",
    justifyContent:"space-between",
    padding:"8%"
}
function MenuLateral() {
    const [botaoAtivo, setBotaoAtivo] = useState("Visão geral")
    return(
        <div>
            <div style={divPrincipal}>
                <div style={divSecundaria}>
                    <Botoes 
                        titulo="Visão geral"
                        ativo={botaoAtivo === "Visão geral"} 
                        onClick={() => setBotaoAtivo("Visão geral")}
                    >
                        {<FontAwesomeIcon icon="fa-solid fa-house" className="iconeMenu" />}
                    </Botoes>
                    <Botoes 
                        titulo="Medicamentos"
                        ativo={botaoAtivo === "Medicamentos"} 
                        onClick={() => setBotaoAtivo("Medicamentos")}
                    >
                        {<FontAwesomeIcon icon="fa-solid fa-pills" className="iconeMenu" />}
                    </Botoes>
                    {/* <Botoes 
                        titulo="Lembretes"
                        ativo={botaoAtivo === "Lembretes"} 
                        onClick={() => setBotaoAtivo("Lembretes")}
                    >
                        {<FontAwesomeIcon icon="fa-regular fa-bell" className="iconeMenu" />}
                    </Botoes> */}
                    <Botoes 
                        titulo="Relatórios"
                        ativo={botaoAtivo === "Relatorios"} 
                        onClick={() => setBotaoAtivo("Relatorios")}
                    >
                        {<FontAwesomeIcon icon="fa-solid fa-chart-column" className="iconeMenu" />}
                    </Botoes>
                    <Botoes 
                        titulo="Histórico"
                        ativo={botaoAtivo === "Historico"} 
                        onClick={() => setBotaoAtivo("Historico")}
                    >
                        {<FontAwesomeIcon icon="fa-solid fa-clock-rotate-left" className="iconeMenu" /> }
                    </Botoes>
                    <Botoes 
                        titulo="Receitas"
                        ativo={botaoAtivo === "Receitas"} 
                        onClick={() => setBotaoAtivo("Receitas")}
                    >
                        {<FontAwesomeIcon icon="fa-solid fa-file-medical" className="iconeMenu" /> }
                    </Botoes>
                    <Botoes 
                        titulo="Profissionais"
                        ativo={botaoAtivo === "Profissionais"} 
                        onClick={() => setBotaoAtivo("Profissionais")}
                    >
                        {<FontAwesomeIcon icon="fa-solid fa-user-nurse" className="iconeMenu" />}
                    </Botoes>
                    <Botoes 
                        titulo="Dependentes"
                        ativo={botaoAtivo === "Dependentes"} onClick={() => setBotaoAtivo("Dependentes")}    
                    >
                        {<FontAwesomeIcon icon="fa-solid fa-users" className="iconeMenu" />}
                    </Botoes>
                    <Botoes 
                        titulo="Configurações"
                        ativo={botaoAtivo === "Configuracoes"} 
                        onClick={() => setBotaoAtivo("Configuracoes")}
                    >
                        {<FontAwesomeIcon icon="fa-solid fa-gear"   className="iconeMenu" />}
                    </Botoes>
                </div>
            </div>
        </div>
    )
    
}
export default MenuLateral