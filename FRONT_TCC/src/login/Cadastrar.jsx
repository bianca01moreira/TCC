import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../assets/imagens/logo.png'
import { Link } from 'react-router-dom'
function Cadastrar() {
    const tela = { 
        backgroundColor: "#67a08f", 
        minHeight: "100vh", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        fontFamily: "Arial",
    }
    const card_login = { 
        backgroundColor: "#FFFFFF", 
        width: "380px", 
        minHeight: "420px", 
        borderRadius: "25px", 
        padding: "35px", 
        boxShadow: "0px 8px 25px rgba(0,0,0,0.12)", 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center" 
    }
    const titulo = { 
        color: "#97BF8A", 
        textAlign: "center", 
        marginBottom: "30px", 
        fontSize: "32px" 
    }
    const fieldset = { 
        border: "none", 
        display: "flex", 
        flexDirection: "column", 
        gap: "18px" 
    }
    const label = { 
        display: "flex", 
        flexDirection: "column", 
        color: "#003E2B", 
        fontWeight: "bold", 
        gap: "8px" 
    }
    const input = { 
        width: "100%", 
        minWidth: "0", 
        padding: "14px 14px 14px 0px", 
        border: "none", 
        outline: "none", 
        fontSize: "15px", 
        backgroundColor: "transparent" 
    }
    const botao = { 
        marginTop: "10px", 
        padding: "14px", 
        borderRadius: "12px", 
        border: "none", 
        backgroundColor: "#003E2B", 
        color: "white", 
        fontSize: "16px", 
        fontWeight: "bold", 
        cursor: "pointer", 
        transition: "0.3s" 
    }
    const texto_inferior = { 
        marginTop: "20px",
        textAlign: "end", 
        color: "#769283", 
        fontSize: "14px" 
    }
    const area_input = { 
        display: "flex", 
        alignItems: "center", 
        backgroundColor: "#E8EAE5", 
        border: "2px solid #E8EAE5", 
        borderRadius: "12px", 
        paddingLeft: "14px", 
        gap: "10px", 
        boxSizing: "border-box" 
    }
    const logo_estilo = { 
        width: "250px", 
        height: "250px", 
        objectFit: "contain", 
        alignSelf: "center", 
        marginBottom:"-100px",
        marginTop:"-50px"
    }
    return (
        <div style={tela}>
            <div style={card_login}>   
                <img
                    src={logo}
                    alt="Logo" 
                    style={logo_estilo}
                />  
                <h1 style={titulo}>Crie uma conta</h1>
                <form action={''} method="POST" encType="multipart/form-data">
                    <fieldset style={fieldset}>
                        <label style={label}>
                            <div style={area_input}>
                                <FontAwesomeIcon icon="fa-regular fa-user" style={{color: "#97bf8a",}} />
                                <input type="text" name="nome" style={input} placeholder='Digite seu nome'/>
                            </div>
                        </label>
                        <label style={label}>
                            <div style={area_input}>
                                <FontAwesomeIcon icon="fa-regular fa-envelope" style={{color: "#97bf8a",}} />
                                <input type='email' name='email' style={input} placeholder='Email'/>
                            </div>
                        </label>
                        <label style={label}>
                            <div style={area_input}>
                                <FontAwesomeIcon icon="fa-solid fa-lock" style={{color: "#97bf8a",}} />
                                <input type="password" name="senha" style={input} placeholder='digite sua senha'/>
                            </div>
                        </label>
                        <label style={label}>
                            <div style={area_input}>
                                <FontAwesomeIcon icon="fa-solid fa-lock" style={{color: "#97bf8a",}} />
                                <input type="password" name="senha_confirm" style={input} placeholder='Confirme sua senha'/>
                            </div>
                        </label>
                        <button type="submit" style={botao}>Cadastrar</button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}
export default Cadastrar