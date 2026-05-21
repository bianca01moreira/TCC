import { height, width } from '@fortawesome/free-brands-svg-icons/fa11ty'
import { faDisplay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const botao = {
    backgroundColor: "transparent",
    border:"none"
}
const divPrincipal = {
    minHeight:"78vh",
    display:"flex",
    justifyContent:"space-between",
    width:"15%",
    padding:"5px",
    backgroundColor:"#ffff",
}
const divSecundaria = {
    display:"flex",
    minHeight:"50vh",
    flexDirection:"column",
    justifyContent:"space-between",
}
const divAlinhaIcone = {
    display:"flex",
    flexDirection:"row",
    paddingLeft:"10%"
}

const botaoIcone = {
    
}
function MenuLateral() {
    return(
        <div>
            <div style={divPrincipal}>
                <div style={divSecundaria}>
                    <div style={divAlinhaIcone}>
                        <button style={botao} type='button'> 
                            <FontAwesomeIcon icon="fa-solid fa-house" style={{color: "#9ca3af",}} /> 
                        </button>
                        <p>Visão geral</p>
                    </div>
                    <div style={divAlinhaIcone}>
                        <button style={botao} type='button'> 
                            <FontAwesomeIcon icon="fa-solid fa-pills" style={{color: "#9ca3af",}} />
                        </button>
                        <p>Medicamentos</p>
                    </div>
                    <div style={divAlinhaIcone}>
                        <button style={botao} type='button'>
                            <FontAwesomeIcon icon="fa-regular fa-bell" style={{color: "#9ca3af",}} />
                        </button>
                            <p>Lembretes</p>
                    </div>
                    <div style={divAlinhaIcone}>
                        <button style={botao} type='button'>
                            <FontAwesomeIcon icon="fa-solid fa-chart-column" style={{color: "#9ca3af",}} />
                        </button>
                        <p>Relatórios</p>
                    </div>
                    <div style={divAlinhaIcone}>
                        <button style={botao} type='button'>
                            <FontAwesomeIcon icon="fa-solid fa-clock-rotate-left" style={{color: "#9ca3af",}} />    
                        </button>
                        <p>Histórico</p>
                    </div>
                    <div style={divAlinhaIcone}>
                        <button style={botao} type='button'>
                            <FontAwesomeIcon icon="fa-solid fa-file-medical" style={{color: "#9ca3af",}} />
                        </button>
                            <p>Receitas</p>
                    </div>
                    <div style={divAlinhaIcone}>
                        <button style={botao} type='button'>
                            <FontAwesomeIcon icon="fa-solid fa-user-nurse" style={{color: "#9ca3af",}} />
                        </button>
                        <p>Profissionais</p>
                    </div>
                    {/* <button style={botao} type='button'>
                        <FontAwesomeIcon icon="fa-solid fa-user-doctor" style={{color: "#9ca3af",}} />
                    </button> */}
                    <div style={divAlinhaIcone}>
                        <button style={botao} type='button'>
                            <FontAwesomeIcon icon="fa-solid fa-users" style={{color: "#9ca3af",}} />
                        </button>
                            <p>Dependentes</p>
                    </div>
                    <div style={divAlinhaIcone}>
                        <button style={botao} type='button'>
                            <FontAwesomeIcon icon="fa-solid fa-gear" style={{color: "#9ca3af",}} />
                        </button>
                            <p>Configurções</p>
                    </div>
                </div>
            </div>
        </div>
    )
    
}
export default MenuLateral