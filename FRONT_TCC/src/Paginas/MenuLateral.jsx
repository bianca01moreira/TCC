import { height, width } from '@fortawesome/free-brands-svg-icons/fa11ty'
import { faDisplay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Botoes from './Botoes.jsx'
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
    return(
        <div>
            <div style={divPrincipal}>
                <div style={divSecundaria}>
                    <Botoes titulo="Visão geral">
                        {<FontAwesomeIcon icon="fa-solid fa-house" className="iconeMenu" />}
                    </Botoes>
                    <Botoes titulo="Medicamentos">
                        {<FontAwesomeIcon icon="fa-solid fa-pills" className="iconeMenu" />}
                    </Botoes>
                    <Botoes titulo="Lembretes">
                        {<FontAwesomeIcon icon="fa-regular fa-bell" className="iconeMenu" />}
                    </Botoes>
                    <Botoes titulo="Relatórios">
                        {<FontAwesomeIcon icon="fa-solid fa-chart-column" className="iconeMenu" />}
                    </Botoes>
                    <Botoes titulo="Histórico">
                        {<FontAwesomeIcon icon="fa-solid fa-clock-rotate-left" className="iconeMenu" /> }
                    </Botoes>
                    <Botoes titulo="Receitas">
                        {<FontAwesomeIcon icon="fa-solid fa-file-medical" className="iconeMenu" /> }
                    </Botoes>
                    <Botoes titulo="Profissionais">
                        {<FontAwesomeIcon icon="fa-solid fa-user-nurse" className="iconeMenu" />}
                    </Botoes>
                    <Botoes titulo="Dependentes">
                        {<FontAwesomeIcon icon="fa-solid fa-users" className="iconeMenu" />}
                    </Botoes>
                    <Botoes titulo="Configurações">
                        {<FontAwesomeIcon icon="fa-solid fa-gear"   className="iconeMenu" />}
                    </Botoes>
                </div>
            </div>
        </div>
    )
    
}
export default MenuLateral