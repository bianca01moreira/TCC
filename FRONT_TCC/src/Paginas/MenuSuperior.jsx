import { height } from '@fortawesome/free-brands-svg-icons/fa11ty'
import logo from '../assets/imagens/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function MenuSuperior() {
    const menuSuperior = {
        minWidth: "100%",
        boxSizing: "border-box",
        backgroundColor:"#ffffff",
        borderBottom: "1px solid #E5E7EB",
        boxShadow: "0px 8px 20px rgba(86, 86, 86, 0.12)", 
    }   
    const divSuperior = {
        display:"flex",
        alignItems:"center",
    }
    const divAlinhaUsuario ={
        display:"flex",
        alignItems:"center",
        minWidth:"55%",
        justifyContent:"space-between",
    }
    const divMeio = {
        display:"flex",
        justifyContent:"end",
        minWidth:"80%",
    }
    const divUsuario = {
        display:"flex",
        justifyContent:"end",
        minWidth:"2%",
    }
    const botao = {
        backgroundColor:"transparent",
        border: "none"
    }
    const logo_estilo = { 
        maxWidth: "160px", 
        maxHeight: "130px",
    }
    const area_input = { 
        display: "flex", 
        alignItems: "center", 
        backgroundColor: "#F3F4F6",  
        borderRadius: "12px", 
        paddingLeft: "14px", 
        gap: "10px", 
        width:"60%",
        boxSizing: "border-box" 
    }
    const input = { 
        width: "90%",  
        padding: "10px 10px 10px 0px",
        border: "none", 
        outline: "none", 
        fontSize: "12px", 
        backgroundColor: "transparent" 
    }
    const alinhaNotificacao = {
        display:"flex",
        justifyContent:"end"
    }
    const p = {
        color:"#065B3A",
        fontWeight:"bold",
        fontSize:"20px"
    }
    return(
        <div style={menuSuperior}>
            <div style={divSuperior}>
                <img
                    src={logo}
                    alt="Logo" 
                    style={logo_estilo}
                />
                <p style={p}>Adherence Care</p>
                <div style={divMeio}>
                    <div style={divAlinhaUsuario}>
                        <div style={area_input}>
                            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" size="lg" style={{color: "#9CA3AF",}} />
                            <input type='text' name='procurar' style={input} placeholder='Busque medicamentos, lembretes...'/>
                        </div>
                        <div style={alinhaNotificacao}>
                            <button type='button' name='notificacao' style={botao}><FontAwesomeIcon icon="fa-regular fa-bell" size="2x" style={{color: "#4B5563",}} /></button>
                            <div style={divUsuario}>
                                <button type='button' name='botaoPerfil' style={botao}><FontAwesomeIcon icon="fa-solid fa-circle-user" size="2x" style={{color: "#4B5563",}} /></button>
                                <p name="mensagemOla">Olá, Fulano</p>
                                <button name='usuarioInfo' type="button" style={botao}><FontAwesomeIcon icon="fa-solid fa-angle-down" size="lg" style={{color: "#4B5563",}} /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuSuperior