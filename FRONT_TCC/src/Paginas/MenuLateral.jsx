import { height, width } from '@fortawesome/free-brands-svg-icons/fa11ty'
import { faDisplay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Botoes from './Botoes.jsx'
import { Link, useLocation } from "react-router-dom";
const botao = {
    backgroundColor: "transparent",
    border:"none"
}
const divPrincipal = {
    width:"190px",
    minWidth:"190px",
    minHeight:"80vh",
    display:"flex",
    padding:"5px",
    backgroundColor:"#fff",
    borderRight:"1px solid #E5E7EB",
}
const divSecundaria = {
    display:"flex",
    flexDirection:"column",
    gap:"25px",
    padding:"20px 10px"
}

const link = {
    textDecoration:"none"
}
function MenuLateral() {
    const location = useLocation();
    return(
        <div>
            <div style={divPrincipal}>
                <div style={divSecundaria}>
                    <Link to="/VisaoGeral" style={link}>
                        <Botoes 
                            titulo="Visão geral"
                            ativo={location.pathname === "/VisaoGeral"} 
                        >
                            {<FontAwesomeIcon icon="fa-solid fa-house" className="iconeMenu" />}
                        </Botoes>
                    </Link>
                    <Link to="/Medicamentos" style={link}>
                        <Botoes 
                            titulo="Medicamentos"
                            ativo={location.pathname === "/Medicamentos"}
                        >
                            {<FontAwesomeIcon icon="fa-solid fa-pills" className="iconeMenu" />}
                        </Botoes>
                    </Link>
                    {/* <Botoes 
                        titulo="Lembretes"
                        ativo={botaoAtivo === "Lembretes"} 
                        onClick={() => setBotaoAtivo("Lembretes")}
                    >
                        {<FontAwesomeIcon icon="fa-regular fa-bell" className="iconeMenu" />}
                    </Botoes> */}
                    <Link to="/Relatorios" style={link}>
                        <Botoes 
                            titulo="Relatórios"
                            ativo={location.pathname === "/Relatorios"}
                        >
                            {<FontAwesomeIcon icon="fa-solid fa-chart-column" className="iconeMenu" />}
                        </Botoes>
                    </Link>
                    <Link to="/Historico" style={link}>
                        <Botoes 
                            titulo="Histórico"
                            ativo={location.pathname === "/Historico"}
                        >
                            {<FontAwesomeIcon icon="fa-solid fa-clock-rotate-left" className="iconeMenu" /> }
                        </Botoes>
                    </Link>
                    <Link to="/Receitas" style={link}>
                        <Botoes 
                            titulo="Receitas"
                            ativo={location.pathname === "/Receitas"}
                        >
                            {<FontAwesomeIcon icon="fa-solid fa-file-medical" className="iconeMenu" /> }
                        </Botoes>
                    </Link>
                    <Link to="/Profissionais" style={link}>
                        <Botoes 
                            titulo="Profissionais"
                            ativo={location.pathname === "/Profissionais"}
                        >
                            {<FontAwesomeIcon icon="fa-solid fa-user-nurse" className="iconeMenu" />}
                        </Botoes>
                    </Link>
                    <Link to="/Dependentes" style={link}>
                        <Botoes 
                            titulo="Dependentes"
                            ativo={location.pathname === "/Dependentes"}   
                        >
                            {<FontAwesomeIcon icon="fa-solid fa-users" className="iconeMenu" />}
                        </Botoes>
                    </Link>
                    <Link to="/Configuracoes" style={link}>
                    <Botoes 
                        titulo="Configurações"
                        ativo={location.pathname === "/Configuracoes"}   
                    >
                        {<FontAwesomeIcon icon="fa-solid fa-gear"   className="iconeMenu" />}
                    </Botoes>
                    </Link>
                </div>
            </div>
        </div>
    )
    
}
export default MenuLateral